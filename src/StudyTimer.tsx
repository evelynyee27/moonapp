import React, { useState, useEffect } from "react";

function StudyTimer() {
  const Timer = ({ duration }: { duration: number }) => {
    const [time, setTime] = useState(duration);
    const [started, setStarted] = useState(false);
    const [label, setLabel] = useState("Start");


    useEffect(() => {
      if (label == "Reset") setTime(duration);

      if (started) {
        setTimeout(() => {
          setTime(time - 1000);
          if (time <= 0) {
            setTime(0);
            setLabel("Reset");
          }
        }, 1000);
      }
    }, [time, started]);

    const handleClick = () => {
      if (label == "Reset") {
        setTime(duration);
        setStarted(true);
      }
      setStarted(!started);
      setLabel(started ? "Start" : "Pause");
    };

    const getFormattedTime = (milliseconds: number) => {
      let total_seconds = Math.floor(milliseconds / 1000);
      let total_minutes = Math.floor(total_seconds / 60);

      let seconds = total_seconds % 60;
      let minutes = total_minutes % 60;

      if (seconds < 10) if (minutes < 10) return `0${minutes}: 0${seconds}`;
      else return `${minutes}: 0${seconds}`;

      if (minutes < 10) if (seconds < 10) return `0${minutes}: 0${seconds}`;
      else return `0${minutes}: ${seconds}`;

      return `${minutes}: ${seconds}`;
    };

    return (
      <div>
        <div className="text-white text-6xl text-center mt-5 mb-5">
          {getFormattedTime(time)}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => handleClick()}
            className="relative border-white border bg-transparent cursor-pointer 
            text-white text-center py-2 px-6 m-2 
            hover:bg-white hover:text-blue-950"
          >
            {[label]}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <body className="flex min-h-screen bg-fixed bg-linear-to-b from-blue-950 to-blue-800 items-center justify-center-safe">
        <img src="/crescent_moon_colored.png" className="animate-float"></img>
        <h1 className="text-white text-1xl mt-5 text-center">Study Timer</h1>

        <Timer duration={25 * 60000} />
      </body>
    </>
  );
}

export default StudyTimer;
