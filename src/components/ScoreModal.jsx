import React from "react";
import { RotateCcw, Trophy, AlertTriangle } from "lucide-react";

const ScoreModal = ({ isOpen, score, reason, onRestart }) => {
  if (!isOpen) return null;

  const isRedHit = reason === "red";

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/80 backdrop-blur-md px-4">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl">
        <div className="flex justify-center mb-4">
          {isRedHit ? (
            <div className="p-4 bg-red-500/10 rounded-full text-red-500">
              <AlertTriangle size={48} />
            </div>
          ) : (
            <div className="p-4 bg-lime-500/10 rounded-full text-gray-400">
              <Trophy size={48} />
            </div>
          )}
        </div>

        {/* Dynamic Message */}
        <h2
          className={`text-3xl font-black uppercase tracking-tighter mb-2 ${
            isRedHit ? "text-red-500" : "text-gray-400"
          }`}
        >
          {isRedHit ? "Vortexed!" : "Time's Up!"}
        </h2>

        <p className="text-slate-400 text-sm uppercase tracking-widest mb-6">
          {isRedHit
            ? "You hit the forbidden red circle."
            : "Congratulations! Great reflexes."}
        </p>

        {/* Score Display */}
        <div className="bg-slate-800/50 rounded-2xl py-4 mb-8">
          <span className="text-slate-500 text-xs uppercase block mb-1">
            Final Score
          </span>
          <span className="text-5xl font-mono font-bold text-white">
            {score}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={onRestart}
          className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-400 transition-colors uppercase tracking-widest text-sm"
        >
          <RotateCcw size={18} />
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ScoreModal;
