import React from 'react';
import '../styles/Calendar.css';

const CalendarHeader = ({ date, onPrevDay, onNextDay }) => (
  <div className="calendar-header">
    <div className="calendar-header-date">
      <span className="calendar-nav-btn" onClick={onPrevDay} aria-label="Jour précédent">◀&nbsp;</span>
      &nbsp;{date}&nbsp;
      <span className="calendar-nav-btn" onClick={onNextDay} aria-label="Jour suivant">&nbsp;▶</span>
    </div>
  </div>
);

export default CalendarHeader; 