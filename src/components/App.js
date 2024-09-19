
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up a timer that increments the seconds count every 1 second
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
       <p>You've been on this page for {seconds} seconds.</p>
    </div>
  )
}

export default App
