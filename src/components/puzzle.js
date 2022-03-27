import React, { useContext } from "react";
import Peice from "./peice";
import PuzzleContext from "../context/puzzleContext";
import Controls from "./controls";

function Puzzle() {
  const { positionMap, imageUrl } = useContext(PuzzleContext);

  return (
    <>
      <Controls />
      <div className="container">
        {Array.from(Array(16).keys()).map((actualPosition) => {
          return (
            <Peice
              key={actualPosition}
              actualPosition={actualPosition}
              currentPosition={positionMap[actualPosition]}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
      <div
        className="normal-picture"
        style={{
          "background-image": `url(${imageUrl})`,
        }}
      ></div>
    </>
  );
}

export default Puzzle;
