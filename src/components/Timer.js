import React from "react";

function Timer() {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer--container">
      <p>Time: {time}</p>
    </div>
  );
}

export default Timer;
