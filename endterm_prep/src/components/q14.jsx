import React, { useEffect, useState } from "react";

export default function FlashSaleCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(10);

  // TODO: start countdown interval
  useEffect(() => {
    const timer = setInterval(()=>{
        setSecondsLeft((prev) =>{
            if(prev<=1){
                clearInterval(timer);
                return 0;
            }
            return prev-1;
        })
    },1000)
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h2>Flash Sale Banner</h2>
      <p>
        {secondsLeft>0 ? `Flash Sale ends in ${secondsLeft} seconds`: "Sale Ended"}
      </p>
    </div>
  );
}