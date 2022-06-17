import React from "react";

function RulesModal({ show, hideClickHandler }) {
  return (
    <div
      className={`${
        show ? "" : "hidden"
      } bg-black/50 absolute  top-0 z-30 shadow-xl w-full h-full flex items-center justify-center`}
    >
      <div
        className={`bg-white sm:rounded-lg p-6  z-50 shadow-xl shadow-blue-400  h-full w-full sm:h-fit sm:w-fit`}
      >
        <div className="flex justify-between mb-4">
          <h1 className="font-bold">RULES</h1>
          <button
            onClick={() => {
              hideClickHandler();
              console.log("close rules");
            }}
          >
            <img src="/images/icon-close.svg" alt="close rules" />
          </button>
        </div>
        <img src="/images/image-rules.svg" alt="rules" />
      </div>
    </div>
  );
}

export default RulesModal;
