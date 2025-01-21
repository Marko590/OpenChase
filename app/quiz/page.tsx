"use client";
import { useState, useRef } from "react";
import CountUp from "react-countup";
import StopWatch from "../components/StopWatch";

const Quiz = () => {
  const [sum, setSum] = useState(0);
  const incrementSum = () => {
    setSum((prev) => prev + 10000);
  };

  return (
    <div>
      <StopWatch allottedTime={60} />
      <h2>
        <CountUp preserveValue end={sum} />
      </h2>
      <button onClick={incrementSum}>Add money</button>
    </div>
  );
};

export default Quiz;
