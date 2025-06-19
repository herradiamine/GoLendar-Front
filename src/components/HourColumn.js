import React from 'react';

const HourColumn = ({ hours, startHour, endHour }) => {
  return (
    <div className="calendar-hours">
      {hours.map((h, idx) => {
        const top = ((h - startHour) / (endHour - startHour + 1)) * 100;
        return (
          <div
            key={h}
            className="calendar-hours-label"
            style={{ top: `calc(${top}% - 10px)` }}
          >
            {h.toString().padStart(2, '0')}
          </div>
        );
      })}
    </div>
  );
};

export default HourColumn; 