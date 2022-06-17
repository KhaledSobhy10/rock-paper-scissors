import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import TopBar from "./TopBar";

import { useSpring, animated } from "react-spring";
import RulesModal from "./RulesModal";

function Game() {
  const [showRulesModal, setShowRulesModal] = useState(false);
  const props = useSpring({
    to: { opacity: 1, scale: 1 },
    from: { opacity: 0, scale: 0.1 },
    config: { duration: 500, delay: 500 },
  });

  const STEP1 = 0;
  const STEP2 = 1;

  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(STEP1);
  const [pickedShape, setPickedShape] = useState();

  function next(result) {
    const { shapeData, win, lose } = result;

    if (shapeData) {
      setPickedShape(shapeData);
      setGameStatus((prevStatus) => 1 + prevStatus);
    }
    if (win) {
      setScore((prev) => 1 + prev);
    } else if (lose) {
      setScore((prev) => {
        const result = prev - 1;
        return result > 0 ? result : 0;
      });
    }
  }

  function playAgain() {
    setGameStatus(STEP1);
    setPickedShape(null);
  }

  return (
    <div className="relative bg-[#1a294a] h-screen w-screen flex flex-col 	 items-center content-between p-2">
      <TopBar score={score}></TopBar>
      {gameStatus === STEP1 && (
        <animated.div style={props}>
          <Step1 next={next} />
        </animated.div>
      )}
      {gameStatus === STEP2 && (
        <Step2 next={next} pickedShape={pickedShape} playAgain={playAgain} />
      )}
      <button
        className="text-white text-sm uppercase border rounded-lg px-8 py-2  mt-auto sm:self-end self-center"
        onClick={() => {
          setShowRulesModal((prev) => !prev);
        }}
      >
        rules
      </button>

      <RulesModal
        show={showRulesModal}
        hideClickHandler={() => {
          setShowRulesModal((prev) => !prev);
        }}
      />
    </div>
  );
}

export default Game;
