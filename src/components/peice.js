import React from "react";
import { getBGPositionFromPercent, ratioMap } from "../utils/positionUtils";

function Peice({ actualPosition, shuffledPosition }) {
  return (
    <div
      className={`piece${actualPosition === "15" ? " empty" : ""}`}
      style={{
        transform: `translate(calc(min(60vh, 60vw)*${ratioMap[shuffledPosition].x}), calc(min(60vh, 60vw)*${ratioMap[shuffledPosition].y}))`,
        backgroundPosition: `${getBGPositionFromPercent(
          ratioMap[actualPosition].x
        )} ${getBGPositionFromPercent(ratioMap[actualPosition].y)}`,
      }}
    ></div>
  );
}

export default Peice;
