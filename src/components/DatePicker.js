import React, { useState, useMemo } from 'react';
import '../styles/DatePicker.css';

const DatePicker = ({ selectedDate, onDateSelect, onClose }) => {
  const [displayDate, setDisplayDate] = useState(new Date(selectedDate));

  const year = displayDate.getFullYear();
  const month = displayDate.getMonth();

  const calendarDays = useMemo(() => {
    const days = [];
    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const startDayIndex = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    for (let i = startDayIndex; i > 0; i--) {
      days.push({ day: daysInPrevMonth - i + 1, monthOffset: -1 });
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push({ day: i, monthOffset: 0 });
    }

    const totalDays = days.length;
    const remainingDays = 42 - totalDays;
    
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ day: i, monthOffset: 1 });
    }
    
    return days;
  }, [year, month]);

  const handlePrevMonth = () => {
    setDisplayDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setDisplayDate(new Date(year, month + 1, 1));
  };

  const handleSelectDate = (day, monthOffset) => {
    const newSelectedDate = new Date(year, month + monthOffset, day);
    onDateSelect(newSelectedDate);
    onClose();
  };

  return (
    <div className="date-picker-overlay" onClick={onClose}>
      <div className="date-picker-container" onClick={(e) => e.stopPropagation()}>
        <div className="date-picker-header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <span>{displayDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</span>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="date-picker-body">
          <div className="date-picker-weekdays">
            {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(d => <div key={d}>{d}</div>)}
          </div>
          <div className="date-picker-days">
            {calendarDays.map(({ day, monthOffset }, index) => {
              const targetDate = new Date(year, month + monthOffset, day);
              const isSelected = selectedDate.toDateString() === targetDate.toDateString();
              const isOtherMonth = monthOffset !== 0;

              return (
                <div 
                  key={`${year}-${month}-${index}`} 
                  className={`date-picker-day ${isSelected ? 'selected' : ''} ${isOtherMonth ? 'other-month' : ''}`}
                  onClick={() => handleSelectDate(day, monthOffset)}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker; 