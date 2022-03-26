import React from "react";
import Peice from "./peice";
import { ratioMap } from "../utils/positionUtils";

function Puzzle() {
  return (
    <div className="container">
      {Object.keys(ratioMap).map((piecePosition) => {
        return (
          <Peice
            key={piecePosition}
            actualPosition={piecePosition}
            shuffledPosition={piecePosition}
          />
        );
      })}
    </div>
  );
}

export default Puzzle;
