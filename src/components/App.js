import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() =>{
    setTime(new Date());
  }, []);

  return (
    <div className="date-time">
      {time.toLocaleString([], { hour12: true })}
    </div>
  );
};

export default App;
