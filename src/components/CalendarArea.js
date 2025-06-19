import React from 'react';
import HourLines from './HourLines';
import Event from './Event';

const TOTAL_MINUTES = 24 * 60;

const CalendarArea = ({ events, hours, startHour, endHour }) => {
  return (
    <div className="calendar-container">
      <HourLines hours={hours} startHour={startHour} endHour={endHour} />
      {events.map((event) => {
        const minutesSinceStart = event.startMin - startHour * 60;
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
  );
};

export default CalendarArea; 