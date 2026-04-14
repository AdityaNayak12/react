import React, { useEffect, useState } from "react";

export default function StudyTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // TODO: manage timer interval
  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Study Timer</h2>
      <p>Elapsed Time: {seconds}s</p>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)} style={{ marginLeft: "10px" }}>
        Pause
      </button>
      <button
        onClick={handleReset}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}