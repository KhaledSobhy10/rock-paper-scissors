import React from "react";
import classNames from "classnames";

function Circle({ shapeData, clickHandler, extraStyle }) {
  const style = classNames(
    `relative w-28 h-28 bg-white border-[12px] rounded-full flex justify-center items-center shadow-lg  ${
      clickHandler ? "active:opacity-75 hover:cursor-pointer" : ""
    }`,
    shapeData.customStyle,
    extraStyle
  );
  return (
    <div
      className={style}
      onClick={() => {
        if (clickHandler) clickHandler(shapeData);
      }}
    >
      <img src={`/images/icon-${shapeData.title}.svg`} alt={shapeData.title} />
    </div>
  );
}

export default Circle;
