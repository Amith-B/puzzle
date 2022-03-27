import React, { useContext } from "react";
import PuzzleContext from "../context/puzzleContext";
import { secondsToHms } from "../utils/puzzleUtil";

function Controls() {
  const { start, pause, reset, timer, isTimerRunning, changePicture } =
    useContext(PuzzleContext);

  return (
    <div className="controls">
      <button
        className="controls__button top-left pointer"
        onClick={isTimerRunning ? pause : start}
      >
        {isTimerRunning ? "Pause" : timer === 0 ? "Start" : "Continue"}
      </button>
      <button className="controls__button top-right">
        {secondsToHms(timer)}
      </button>
      <button
        className="controls__button bottom-left pointer"
        onClick={() => reset(!isTimerRunning)}
      >
        {!isTimerRunning ? "Shuffle" : "Reset"}
      </button>
      <button
        className="controls__button bottom-right pointer"
        onClick={changePicture}
      >
        Change picture
      </button>
    </div>
  );
}

export default Controls;
