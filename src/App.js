import React, { useState } from 'react';
import Calendar from 'react-calendar';
import logo from './logo.svg';
import './App.css';
import 'react-calendar/dist/Calendar.css';

export default function Results() {
  const [calDate, setCalDate] = useState(new Date())

  function onChange (catDate) {
    setCalDate(calDate)
  }

  return (
    <div className="result-calendar">
      <Calendar onChange={onChange} value={calDate} />
    </div>
  )
}
