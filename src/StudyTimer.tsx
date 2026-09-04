//import React, { useState, useEffect } from "react";
import Sky from "./components/Sky.tsx";
import Button from "./components/Button.tsx";

function StudyTimer() {
  const [time, setTime] = useState(25 * 60000);
  const [currentTimer, setCurrentTimer] = useState("pomodoro");
  const [started, setStarted] = useState(false);
  const [label, setLabel] = useState("start");

  let labels = ["start", "pause", "reset"];

  // to make 3 buttons which change the timer type
  const Buttons = () => {
    const Button = ({ timerType }: { timerType: string }) => {
      const handleClick = () => {
        setStarted(false);
        if (timerType == "pomodoro") {
          setTime(25 * 60000);
          setCurrentTimer("pomodoro");
          setLabel(labels[0]);
        } else if (timerType == "short break") {
          setTime(5 * 60000);
          setCurrentTimer("short break");
          setLabel(labels[0]);
        } else if (timerType == "long break") {
          setTime(15 * 60000);
          setCurrentTimer("long break");
          setLabel(labels[0]);
        }
      };

      return (
        <button
          onClick={() => handleClick()}
          className="border-blue-950 border rounded-2xl bg-blue-950 text-white tracking-wider text-xs cursor-pointer m-1.5 px-3 py-2 hover:bg-transparent hover:border hover:border-white"
        >
          {timerType}
        </button>
      );
    };

    return (
      <div>
        <Button timerType={"pomodoro"} />
        <Button timerType={"short break"} />
        <Button timerType={"long break"} />
      </div>
    );
  };

  const Timer = () => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (started) {
          setTimeout(() => {
            setTime(time - 1000);
            if (time <= 0) {
              setTime(0);
              setLabel("reset");
            }
          });
        }
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }, [time, started]);

    const handleClick = () => {
      if (label == "reset") {
        if (currentTimer == "pomodoro") setTime(25 * 60000);
        if (currentTimer == "short break") setTime(5 * 60000);
        if (currentTimer == "long break") setTime(15 * 60000);
        setStarted(true);
      }
      setStarted(!started);
      setLabel(started ? "start" : "pause");
    };

    const getFormattedTime = (milliseconds: number) => {
      let total_seconds = Math.floor(milliseconds / 1000);
      let total_minutes = Math.floor(total_seconds / 60);

      let seconds = total_seconds % 60;
      let minutes = total_minutes % 60;

      if (seconds < 10)
        if (minutes < 10) return `0${minutes}:0${seconds}`;
        else return `${minutes}:0${seconds}`;

      if (minutes < 10)
        if (seconds < 10) return `0${minutes}:0${seconds}`;
        else return `0${minutes}:${seconds}`;

      return `${minutes}:${seconds}`;
    };

    return (
      <div>
        <div className="text-white text-6xl">{getFormattedTime(time)}</div>

        <div>
          {/* start/pause button */}
          <button
            onClick={() => handleClick()}
            className="border-white border bg-transparent cursor-pointer 
            text-white py-2 px-8
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
      <Button label={"back"} url={"/lobby"} />

      <body className="flex text-center items-center justify-center min-h-screen bg-fixed bg-linear-to-b from-blue-950 to-blue-800">
        <Sky numberOfStars={150} />

        <div>
          <Buttons />
          <img
            src="/crescent_moon_colored.png"
            className="animate-floating relative"
          ></img>
        </div>

        <div className="m-5">
          <h1 className="text-white text-2xl">pomodoro timer</h1>
          <Timer />
        </div>
      </body>
    </>
  );
}

export default StudyTimer;
