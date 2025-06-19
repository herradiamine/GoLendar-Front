import React, { useEffect, useState } from 'react';
import Event from './components/Event';
import './styles/calendar.css';
import './styles/App.css';

// Fonction utilitaire pour convertir une heure ("HH:MM") en minutes depuis minuit
function timeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

const START_HOUR = 0;
const END_HOUR = 23;
const TOTAL_MINUTES = (END_HOUR - START_HOUR + 1) * 60;
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

  // Date du jour au format français long
  const today = new Date();
  const dateString = today.toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
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

  if (loading) return <div>Chargement des événements...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div>
      <div className="calendar-header">
        {dateString.charAt(0).toUpperCase() + dateString.slice(1)}
      </div>
      <div className="calendar-outer">
        {/* Colonne des heures */}
        <div className="calendar-hours">
          {HOURS.map((h, idx) => {
            const top = ((h - START_HOUR) / (END_HOUR - START_HOUR + 1)) * 100;
            return (
              <div
                key={h}
                className="calendar-hours-label"
                style={{ top: `calc(${top}% - 10px)` }}
              >
                {h.toString().padStart(2, '0') + ':00'}
              </div>
            );
          })}
        </div>
        {/* Zone calendrier principale */}
        <div className="calendar-container">
          {/* Lignes horaires */}
          {HOURS.map((h, idx) => {
            if (idx === 0) return null;
            const top = ((h - START_HOUR) / (END_HOUR - START_HOUR + 1)) * 100;
            return (
              <div
                key={h}
                className="calendar-hour-line"
                style={{ top: `${top}%` }}
              />
            );
          })}
          {/* Événements */}
          {events.map((event) => {
            const minutesSinceStart = event.startMin - START_HOUR * 60;
            const top = (minutesSinceStart / TOTAL_MINUTES) * 100;
            const height = (event.duration / TOTAL_MINUTES) * 100;
            const width = 100 / event.clusterSize;
            const left = event.column * width;
            return (
              <Event
                key={event.id}
                id={event.id}
                top={`${top}%`}
                height={`${height}%`}
                start={event.start}
                duration={event.duration}
                style={{ left: `${left}%`, width: `calc(${width}% - 8px)` }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
