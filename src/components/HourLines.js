import React from 'react';

const HourLines = ({ hours, startHour, endHour }) => {
  return (
    <>
      {hours.map((h, idx) => {
        if (idx === 0) return null;
        const top = ((h - startHour) / (endHour - startHour + 1)) * 100;
        return (
          <div
            key={h}
            className="calendar-hour-line"
            style={{ top: `${top}%` }}
          />
        );
      })}
    </>
  );
};

export default HourLines; 