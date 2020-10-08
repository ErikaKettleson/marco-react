import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import 'react-calendar/dist/Calendar.css';

export default function Results() {
  const [calDate, setCalDate] = useState(new Date())
  const [currentTime, setCurrentTime] = useState(0)
  const [testVal, setTestVal] = useState(0)
  const [hasSpotifyAuth, setSpotifyAuth] = useState(null)

  useEffect(() => {
    fetch('/auth').then(res => res.json()).then(data => {
      setSpotifyAuth(data)
    })
    // fetch('/time').then(res => res.json()).then(data => {
    //   setCurrentTime(data.time)
    // })
  }, [])

  function onChange (calDate) {
    // Sat Oct 10 2020 00:00:00 GMT-0700 (Pacific Daylight Time) 
    setCalDate(calDate);
    fetch('/testing').then(res => res.json()).then(data => {
      setTestVal(data.testKey)

    })
  }

  return (
    <div className="result-calendar">
      <Calendar onChange={onChange} value={calDate} />
      <div> 
      <p>The current time is {currentTime}</p>
      <p>this is testVal {testVal}</p>
    </div>
    </div>

  )
}
