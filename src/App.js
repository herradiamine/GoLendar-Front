import React, { useEffect, useState } from 'react';
import { useParams, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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

// Fonction pour formater la date au format JJ-MM-YYYY
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

// Fonction pour parser une date au format JJ-MM-YYYY
function parseDate(dateStr) {
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
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

const CalendarView = () => {
  const { date } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(() => {
    return date ? parseDate(date) : new Date();
  });

  useEffect(() => {
    const formattedDate = formatDate(selectedDate);
    if (formattedDate !== date) {
      navigate(`/${formattedDate}`);
    }

    fetch(`/${formattedDate}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Aucun événement trouvé pour cette date');
        }
        return response.json();
      })
      .then((data) => {
        setEvents(computeOverlaps(data));
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setEvents([]);
        setLoading(false);
      });
  }, [selectedDate, date, navigate]);

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

  const handleToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    setSelectedDate(today);
  };

  const dateString = selectedDate.toLocaleDateString('fr-FR', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div>
      <CalendarHeader
        date={dateString.charAt(0).toUpperCase() + dateString.slice(1)}
        onPrevDay={handlePrevDay}
        onNextDay={handleNextDay}
        onToday={handleToday}
      />
      <div className="calendar-outer">
        <HourColumn hours={HOURS} startHour={START_HOUR} endHour={END_HOUR} />
        <CalendarArea 
          events={events} 
          hours={HOURS} 
          startHour={START_HOUR} 
          endHour={END_HOUR}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/:date" element={<CalendarView />} />
      <Route path="/" element={<Navigate to={`/${formatDate(new Date())}`} replace />} />
    </Routes>
  );
};

export default App;
