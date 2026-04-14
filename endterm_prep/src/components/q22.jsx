import React, { useRef, useState } from "react";

export default function ScoreChangeTracker() {
  const [score, setScore] = useState(0);
  const previousScoreRef = useRef(null);

  // TODO: update previous score using ref
  const handleIncreaseScore = () => {
    previousScoreRef.current = score;
    setScore((prev) => prev+1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Score Tracker</h2>
      <p>Current Score: {score}</p>
      <p>Previous Score: {previousScoreRef.current === null ? "N/A" : previousScoreRef.current}</p>

      <button onClick={handleIncreaseScore}>Increase Score</button>
    </div>
  );
}