import React, { useState } from 'react';
import Calendar from 'react-calendar';
import logo from './pictures/logoBG.png';
import 'react-calendar/dist/Calendar.css';
import './MainPage.css'; // Custom styles for the page

function MainPage() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="main-page">
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Calendar UBB</h1>
      </header>
      <div className="content">
        <div className="calendar-container">
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="calendar"
          />
        </div>
        <div className="sidebar">
          <h2 className="sidebar-date">{date.toDateString()}</h2>
          <div className="events-container">
            {/* Empty for now; later, you can add events here */}
            <p>No events scheduled for this day.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
