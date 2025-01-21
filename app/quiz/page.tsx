"use client";
import { useState, useRef } from "react";
import CountUp from "react-countup";

const Quiz = () => {
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [sum, setSum] = useState(0);
  const incrementSum = () => {
    setSum((prev) => prev + 10000);
  };

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
    setTime(60);
  };

  return (
    <div>
      <h1>{time}s</h1>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>

      <h2>
        <CountUp preserveValue end={sum} />
      </h2>
      <button onClick={incrementSum}>Add money</button>
    </div>
  );
};

export default Quiz;
