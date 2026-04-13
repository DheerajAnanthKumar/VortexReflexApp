import React from "react";
import InitialButton from "./InitialButton";

const HeroContent = ({ onStart, difficulty }) => {
  return (
    <div className="relative z-50 flex items-center justify-center flex-col gap-4 px-4 text-center">
      <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter drop-shadow-2xl leading-none">
        VORTEX REFLEX
      </h1>

      <p className="text-sm md:text-md lg:text-lg text-white max-w-70 md:max-w-none uppercase">
        Select any{" "}
        <span className="bg-linear-to-r from-yellow-300 via-blue-400 to-purple-600 bg-clip-text text-transparent">
          {/*  via-teal-400 via-blue-500 */}
          color
        </span>
        . Avoid the <span className="text-red-600 font-bold">Red</span>
      </p>

      <p className="uppercase text-sm md:text-md lg:text-lg text-white max-w-70 md:max-w-none mt-6">
        Select Difficulty
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[3, 6, 9, 12].map((value) => (
          <InitialButton
            isActive={difficulty == value}
            key={value}
            value={value}
            onClick={() => onStart(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
