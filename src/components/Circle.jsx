import React from "react";

const Circle = ({ colorClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        aspect-square w-20 md:w-28 rounded-full 
        ${colorClass} 
        cursor-pointer border border-slate-800/50
        transition-all duration-200 active:scale-95
        shadow-inner
      `}
    />
  );
};

export default Circle;
