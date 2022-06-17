import React from "react";

import Circle from "./Circle";
import { PAPER, ROCK, SCISSORS } from "../constants/shapes";

function Step1({ next }) {
  function picked(shapeData) {
    console.log(shapeData.title, ": picked");
    next({ shapeData });
  }
  return (
    <div className="relative grid grid-cols-2 place-items-center gap-24">
      <img src="/images/bg-triangle.svg" className="absolute w-3/4" alt="" />
      <Circle shapeData={ROCK} extraStyle="" clickHandler={picked} />
      <Circle shapeData={PAPER} extraStyle="" clickHandler={picked} />
      <Circle
        shapeData={SCISSORS}
        extraStyle="col-span-2 place-center"
        clickHandler={picked}
      />
    </div>
  );
}

export default Step1;
