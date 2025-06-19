import React from 'react';
import '../styles/Event.css';

function minutesToTime(minutes) {
  const h = Math.floor(minutes / 60).toString().padStart(2, '0');
  const m = (minutes % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}

const Event = ({ id, top, height, style = {}, titre="", start, duration, children }) => {
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
      title={`${id} ${titre} · ${startStr} - ${endStr}`}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top,
        height,
        ...style,
      }}
    >
      <span className="event-title">{id} {titre} · {startStr} - {endStr}</span>
    </div>
  );
};

export default Event; 