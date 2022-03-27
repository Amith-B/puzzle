import React, { useContext } from "react";
import Peice from "./peice";
import PuzzleContext from "../context/puzzleContext";
import Controls from "./controls";
import { secondsToHms } from "../utils/puzzleUtil";

function Puzzle() {
  const { imageUrl, timer, reset, showSuccess, setShowSuccess } =
    useContext(PuzzleContext);

  const handleAnimationEnd = () => {
    setShowSuccess(false);
    reset(false);
  };

  return (
    <>
      <Controls />
      <div className="container">
        {showSuccess && (
          <div className="game-success" onAnimationEnd={handleAnimationEnd}>
            Finished In: {secondsToHms(timer)}
          </div>
        )}
        {Array.from(Array(16).keys()).map((actualPosition) => {
          return <Peice key={actualPosition} actualPosition={actualPosition} />;
        })}
      </div>
      {imageUrl && (
        <div
          className="normal-picture"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
      )}
    </>
  );
}

export default Puzzle;
