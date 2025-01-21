"use client";
import React from "react";
import { useState, useRef } from "react";
interface StopWatchProps {
  allottedTime: number;
}
const StopWatch: React.FC<StopWatchProps> = ({ allottedTime }) => {
  const [time, setTime] = useState(allottedTime);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startStopwatch = () => {
    if (!isRunning && time > 0) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            stopStopwatch();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetStopwatch = () => {
    stopStopwatch();
    setTime(allottedTime);
  };

  return (
    <div>
      <h1>{time}s</h1>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default StopWatch;
