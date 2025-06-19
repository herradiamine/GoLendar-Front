import React, { useEffect, useState } from 'react';
import CalendarHeader from './components/CalendarHeader';
import HourColumn from './components/HourColumn';
import CalendarArea from './components/CalendarArea';
import './styles/Calendar.css';
import './styles/App.css';

// Fonction utilitaire pour convertir une heure ("HH:MM") en minutes depuis minuit
function timeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

const START_HOUR = 0;
const END_HOUR = 23;
const HOURS = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => START_HOUR + i);

// Détection des groupes de chevauchement et attribution des colonnes
function computeOverlaps(events) {
  // On enrichit chaque événement avec ses bornes en minutes
  const enriched = events.map(e => ({
    ...e,
    startMin: timeToMinutes(e.start),
    endMin: timeToMinutes(e.start) + e.duration,
  })).sort((a, b) => a.startMin - b.startMin);

  let clusters = [];
  let currentCluster = [];
  let lastEnd = null;

  for (let event of enriched) {
    if (currentCluster.length === 0 || event.startMin < lastEnd) {
      currentCluster.push(event);
      lastEnd = Math.max(lastEnd || 0, event.endMin);
    } else {
      clusters.push(currentCluster);
      currentCluster = [event];
      lastEnd = event.endMin;
    }
  }
  if (currentCluster.length > 0) clusters.push(currentCluster);

  // Attribution des colonnes dans chaque cluster
  let result = [];
  clusters.forEach((cluster, clusterIdx) => {
    // Pour chaque événement, on cherche la première colonne libre
    let columns = [];
    cluster.forEach(event => {
      let col = 0;
      while (columns[col] && columns[col] > event.startMin) {
        col++;
      }
      event.column = col;
      event.cluster = clusterIdx;
      columns[col] = event.endMin;
      result.push(event);
    });
    // On stocke aussi le nombre de colonnes max pour le cluster
    cluster.forEach(event => {
      event.clusterSize = columns.length;
    });
  });
  return result;
}

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });

  useEffect(() => {
    fetch('input.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des événements');
        }
        return response.json();
      })
      .then((data) => {
        setEvents(computeOverlaps(data));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handlePrevDay = () => {
    setSelectedDate(prev => {
      const d = new Date(prev);
      d.setDate(d.getDate() - 1);
      return d;
    });
  };
  const handleNextDay = () => {
    setSelectedDate(prev => {
      const d = new Date(prev);
      d.setDate(d.getDate() + 1);
      return d;
    });
  };

  const dateString = selectedDate.toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  if (loading) return <div>Chargement des événements...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <button onClick={handlePrevDay} aria-label="Jour précédent">◀</button>
        <CalendarHeader date={dateString.charAt(0).toUpperCase() + dateString.slice(1)} />
        <button onClick={handleNextDay} aria-label="Jour suivant">▶</button>
      </div>
      <div className="calendar-outer">
        <HourColumn hours={HOURS} startHour={START_HOUR} endHour={END_HOUR} />
        <CalendarArea events={events} hours={HOURS} startHour={START_HOUR} endHour={END_HOUR} />
      </div>
    </div>
  );
};

export default App;
