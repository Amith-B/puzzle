import React, { useContext } from "react";
import { getBGPositionFromPercent } from "../utils/puzzleUtil";
import PuzzleContext from "../context/puzzleContext";

function Peice({ actualPosition, currentPosition, imageUrl }) {
  const { positionPercentMap } = useContext(PuzzleContext);

  return (
    <div
      className={`piece${actualPosition === 15 ? " empty" : ""}`}
      style={{
        ...(actualPosition !== 15 && { backgroundImage: `url(${imageUrl})` }),
        transform: `translate(calc(min(60vh, 60vw)*${positionPercentMap[currentPosition].x}), calc(min(60vh, 60vw)*${positionPercentMap[currentPosition].y}))`,
        backgroundPosition: `${getBGPositionFromPercent(
          positionPercentMap[actualPosition].x
        )} ${getBGPositionFromPercent(positionPercentMap[actualPosition].y)}`,
      }}
    ></div>
  );
}

export default Peice;
