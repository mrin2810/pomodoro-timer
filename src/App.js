import React, { useState } from 'react';
import './App.css';

function padTime(number, len = 2, char = '0') {
  return number.toString().padStart(len, char);
} 

export default function App() {
  // State Variables
  const [title, setTitle] = useState('Let the Countdown Begin!')
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  
  // Functions
  function startTimer() {
    setInterval (() => {
      setTimeLeft(timeLeft => (
          (timeLeft >= 1) ? timeLeft - 1 : 0
        )
      );
    }, 1000);

  }
  
  // Computed Variables
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - (minutes*60));

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
