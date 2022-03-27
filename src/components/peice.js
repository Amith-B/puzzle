import React, { useContext, useState } from "react";
import {
  getBGPositionFromPercent,
  checkSwap,
  getPosition,
} from "../utils/puzzleUtil";
import PuzzleContext from "../context/puzzleContext";

function Peice({ actualPosition }) {
  const [shake, setShake] = useState();
  const { positionPercentMap, positionMap, swap, imageUrl } =
    useContext(PuzzleContext);

  const handleClick = () => {
    console.log(actualPosition, positionMap);
    const { isSwappable, swapBetween } = checkSwap(actualPosition, positionMap);
    if (isSwappable) {
      swap(swapBetween[0], swapBetween[1], positionMap);
    } else {
      setShake(true);
    }
  };

  const isEmptyPiece = actualPosition === 15;

  const getPositionPercent = () => {
    const pos = positionPercentMap[getPosition(actualPosition, positionMap)];
    return pos;
  };

  return (
    <div
      onAnimationEnd={() => setShake(false)}
      className={`piece${isEmptyPiece ? " empty" : " pointer"}${
        imageUrl ? "" : " piece__with-numbers"
      }${shake ? " shake" : ""}`}
      onClick={() => {
        !isEmptyPiece && handleClick();
      }}
      style={{
        ...(!isEmptyPiece &&
          imageUrl && { backgroundImage: `url(${imageUrl})` }),
        "--position": `translate(calc(min(60vh, 60vw)*${
          getPositionPercent().x
        }), calc(min(60vh, 60vw)*${getPositionPercent().y}))`,
        backgroundPosition: `${getBGPositionFromPercent(
          positionPercentMap[actualPosition].x
        )} ${getBGPositionFromPercent(positionPercentMap[actualPosition].y)}`,
      }}
    >
      {!imageUrl && !isEmptyPiece && actualPosition}
    </div>
  );
}

export default Peice;
