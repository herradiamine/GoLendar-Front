import React from 'react';
import '../styles/Calendar.css';

export default function CalendarHeader({ date, onPrevDay, onNextDay, onToday }) {
  return (
    <header className="calendar-header">
      <div className="calendar-header-left">
        <button className="calendar-today-btn" onClick={onToday}>Aujourd'hui</button>
      </div>
      <div className="calendar-header-center">
        <button className="calendar-nav-btn" onClick={onPrevDay} aria-label="Jour précédent">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 15L8 10L13 5" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="calendar-header-date">
          {date}
          <svg className="calendar-header-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <button className="calendar-nav-btn" onClick={onNextDay} aria-label="Jour suivant">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 5L12 10L7 15" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="calendar-header-right" />
    </header>
  );
} 