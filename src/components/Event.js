import React from 'react';
import '../styles/Event.css';

function minutesToTime(minutes) {
  const h = Math.floor(minutes / 60).toString().padStart(2, '0');
  const m = (minutes % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}

const Event = ({ id, top, height, style = {}, start, duration, children }) => {
  // Calcul de l'heure de début et de fin
  let startMin = 0;
  if (start) {
    const [h, m] = start.split(':').map(Number);
    startMin = h * 60 + m;
  }
  const endMin = startMin + (duration || 0);
  const startStr = minutesToTime(startMin);
  const endStr = minutesToTime(endMin);

  return (
    <div
      id={String(id)}
      className="calendar-event"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top,
        height,
        ...style,
      }}
    >
      <div className="event-title">Événement #{id}</div>
      <div className="event-time">{startStr} - {endStr}</div>
    </div>
  );
};

export default Event; 