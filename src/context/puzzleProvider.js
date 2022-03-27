import PuzzleContext from "./puzzleContext";

import { useEffect, useRef, useState } from "react";

import initialData from "./initialData";
import { shuffleArray } from "../utils/puzzleUtil";

export default function EditorProvider({ children }) {
  const [positionMap, setPositionMap] = useState(initialData.positionMap);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState(initialData.images[imageIndex]);

  const intervalRef = useRef(null);

  useEffect(() => {}, []);

  const changeImage = () => {
    const newIndex = imageIndex + 1;
    setImageIndex(newIndex);
    setImageUrl(initialData.images[newIndex % initialData.images.length]);
  };

  const reset = (shuffle) => {
    setTimer(0);
    setIsTimerRunning(false);
    clearTimer();
    if (shuffle) {
      const newArr = [...shuffleArray(Array.from(Array(15).keys())), 15];
      setPositionMap(newArr);
    } else {
      setPositionMap(initialData.positionMap);
    }
  };

  const start = () => {
    clearTimer();
    intervalRef.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    setIsTimerRunning(true);
  };

  const pause = () => {
    clearTimer();
    setIsTimerRunning(false);
  };

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const changePicture = () => {
    reset(false);
    changeImage();
  };

  return (
    <PuzzleContext.Provider
      value={{
        positionMap,
        positionPercentMap: initialData.positionPercentMap,
        reset,
        start,
        pause,
        isTimerRunning,
        timer,
        changePicture,
        imageUrl,
        changeImage,
      }}
    >
      {children}
    </PuzzleContext.Provider>
  );
}
