import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import Circle from "./Circle";

import { SCISSORS, ROCK, PAPER } from "../constants/shapes";

function Step2({ next, pickedShape, playAgain }) {
  const shapes = [SCISSORS, ROCK, PAPER];

  const props = useSpring({
    from: { opacity: 0.1, scale: 0.7 },
    to: [
      { opacity: 0.3, scale: 1 },
      { opacity: 0.1, scale: 0.7 },
    ],
    loop: true,
    config: { duration: 650, easing: easings.easeInOutQuart },
  });

  const resultStyle = useSpring({
    from: { scale: 0.1 },
    to: [{ scale: 0.5 }, { scale: 1.3 }, { scale: 1 }],
    config: { duration: 650, easing: easings.easeInOutQuart, delay: 300 },
  });

  const [isUserWin, setIsUserWin] = useState(null);

  const [randomShape, setRandomShape] = useState(null);

  function getRandomShape() {
    const guess = shapes[Math.round(Math.random() * 2)];
    if (guess.title === pickedShape.title) {
      return getRandomShape();
    } else {
      return guess;
    }
  }

  useEffect(() => {
    if (!randomShape) {
      setTimeout(() => {
        const randomShapeS = getRandomShape();
        setRandomShape(randomShapeS);
        setIsUserWin(checkIsUserWin(pickedShape, randomShapeS));
      }, 2000);
    }
  }, []);

  useEffect(() => {
    if (isUserWin !== null) {
      if (isUserWin) {
        next({ win: true });
      } else next({ lose: true });
    }
  }, [isUserWin]);

  function checkIsUserWin(userShape, anotherShape) {
    if (userShape.title === SCISSORS.title) {
      return anotherShape.title === PAPER.title;
    }
    if (userShape.title === PAPER.title) {
      return anotherShape.title === ROCK.title;
    }
    if (userShape.title === ROCK.title) {
      return anotherShape.title === SCISSORS.title;
    }
  }

  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 p-2 gap-y-4 lg:gap-x-16 place-items-center ">
      <div className="flex flex-col items-center gap-2">
        <div className="text-white font-bold ">YOU PICKED</div>
        <Circle shapeData={pickedShape} extraStyle=" lg:w-36 lg:h-36" />
      </div>
      {(isUserWin !== null && (
        <animated.div
          style={resultStyle}
          className="flex flex-col items-center gap-2 text-white font-bold text-2xl uppercase sm:row-start-1 sm:col-start-2 sm:col-span-1 row-start-2	col-span-2	"
        >
          {isUserWin ? "You win " : "You lose"}
          <button
            className={`border-2 rounded-lg px-8 py-2 bg-white ${
              isUserWin ? "text-blue-600 " : "text-pink-600"
            } text-sm uppercase hover:bg-opacity-80`}
            onClick={() => {
              playAgain();
            }}
          >
            play again
          </button>
        </animated.div>
      )) || (
        <div className="sm:row-start-1 sm:col-start-2 sm:col-span-1 row-start-2	col-span-2"></div>
      )}

      <div className="flex flex-col items-center gap-2">
        <div className="text-white font-bold">THE HOUSE PICKED</div>
        {(randomShape && (
          <Circle shapeData={randomShape} extraStyle=" lg:w-36 lg:h-36 " />
        )) || (
          <animated.div style={props}>
            <div className="w-28 h-28 lg:w-36 lg:h-36 bg-white rounded-full "></div>
          </animated.div>
        )}
      </div>
    </div>
  );
}

export default Step2;
