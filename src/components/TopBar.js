import React from "react";

function TopBar({ score }) {
  return (
    <div className="lg:w-1/2 sm:w-3/4 h-[120px] p-4 m-4 border-2 rounded-lg border-gray-500	 flex items-center justify-between	gap-2">
      <img src={"/images/logo.svg"} alt="logo" />
      <div className="bg-white h-full flex flex-col items-center justify-center px-5 border-2 rounded-md text-[#565269] font-bold text-sm">
        SCORE <span className="text-5xl font-bold	text-stone-600">{score}</span>
      </div>
    </div>
  );
}

export default TopBar;
