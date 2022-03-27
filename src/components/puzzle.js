import React, { useContext } from "react";
import Peice from "./peice";
import PuzzleContext from "../context/puzzleContext";
import Controls from "./controls";

function Puzzle() {
  const { imageUrl } = useContext(PuzzleContext);

  return (
    <>
      <Controls />
      <div className="container">
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
