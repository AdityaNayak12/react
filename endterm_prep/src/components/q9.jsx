import React, { useEffect, useState } from "react";

export default function WelcomeBanner() {
  const [message, setMessage] = useState("Loading user...");

  // TODO: update message after 2 seconds
  useEffect(() => {
    const timerID = setTimeout(() =>{
        setMessage("Welcome back, Student")
    }, 2000)

    return () => clearTimeout(timerID);
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h2>Dashboard Banner</h2>
      <p>{message}</p>
    </div>
  );
}