import React from "react";

const InitialButton = ({ value, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative px-12 py-4 font-bold tracking-widest uppercase transition-all border rounded-2xl border-slate-700 
        hover:bg-slate-100 hover:text-slate-950 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${
          isActive
            ? "bg-white text-slate-950 border-white"
            : "bg-slate-900/50 text-white"
        }
      `}
    >
      {value}
    </button>
  );
};
export default InitialButton;
