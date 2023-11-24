import React, { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = time.toLocaleDateString();
  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <div>
        <strong>Date:</strong> {formattedDate}
      </div>
      <div>
        <strong>Time:</strong> {formattedTime}
      </div>
    </div>
  );
}






