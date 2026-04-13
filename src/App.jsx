import React, { useState, useEffect } from "react";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import HeroContent from "./components/HeroContent";
import Circle from "./components/Circle";
import Footer from "./components/Footer";
import ScoreModal from "./components/ScoreModal";

const App = () => {
  const [currentView, setCurrentView] = useState("menu");
  const [difficulty, setDifficulty] = useState(0);
  const [activeCircle, setActiveCircle] = useState(null);
  const [tick, setTick] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [endReason, setEndReason] = useState("");

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setDifficulty(0);
    setIsModalOpen(false);
    setCurrentView("menu");
  };

  const colors = [
    "bg-yellow-400",
    "bg-amber-400",
    "bg-orange-400",
    "bg-lime-400",
    "bg-green-500",
    "bg-emerald-400",
    "bg-teal-500",
    "bg-cyan-400",
    "bg-sky-500",
    "bg-blue-600",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-violet-600",
    "bg-fuchsia-500",
    "bg-pink-500",
  ];

  const handleCircleClick = (clickedIndex) => {
    //console.log("Clicked:", clickedIndex, "Active:", activeCircle);
    if (!activeCircle) {
      console.log("No active circle yet");
      return;
    }
    if (clickedIndex !== activeCircle.index) {
      console.log("Wrong circle clicked");
      return;
    }
    if (activeCircle.color === "bg-red-600") {
      console.log("GAME OVER: You hit red!");
      setEndReason("red");
      setIsModalOpen(true);
      setCurrentView("menu");
    } else {
      console.log("Clicled");
      setScore((prev) => prev + 1);
      setTick((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (currentView !== "gameview" || timeLeft <= 0) {
      if (timeLeft === 0) {
        setEndReason("time");
        setIsModalOpen(true);
        setCurrentView("menu");
      }
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentView, timeLeft]);

  useEffect(() => {
    if (currentView !== "gameview") return;

    // 1. Use a decay formula: Base * (Rate ^ Score)
    // This starts at 2000ms and gets 7% faster each point.
    const exponentialSpeed = 2000 * Math.pow(0.93, score);

    // 2. Cap it so it's never humanly impossible (e.g., 350ms)
    const currentSpeed = Math.max(350, exponentialSpeed);

    const triggerNext = () => {
      const randomIndex = Math.floor(Math.random() * difficulty);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const isRed = Math.random() < 0.2;
      setActiveCircle({
        index: randomIndex,
        color: isRed ? "bg-red-600" : randomColor,
      });
    };

    triggerNext();
    const interval = setInterval(triggerNext, currentSpeed);

    return () => clearInterval(interval);
  }, [currentView, difficulty, tick, score]);

  return (
    <div className="relative h-screen w-full bg-slate-950 overflow-hidden text-slate-100 flex flex-col">
      <div className="absolute inset-0 z-0">
        <StarsBackground starCount={2000} />
      </div>
      {currentView === "menu" ? (
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 mt-5">
          <HeroContent
            onStart={(val) => setDifficulty(val)}
            difficulty={difficulty}
          />

          <button
            onClick={() => setCurrentView("gameview")}
            disabled={difficulty === 0}
            className="group relative px-12 py-4 font-bold tracking-widest uppercase transition-all border rounded-full border-slate-700 bg-slate-900/50 hover:bg-slate-100 hover:text-slate-950 disabled:opacity-50 disabled:cursor-not-allowed "
          >
            Start
          </button>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          {/* Back Button */}
          <button
            onClick={() => {
              setScore(0);
              setTick(0);
              setActiveCircle(null);
            }}
            className="absolute top-8 left-8 text-slate-400 hover:text-white"
          >
            ← Back to Menu
          </button>
          {/* Timer */}
          <div
            className={`text-4xl font-black ${
              timeLeft < 10 ? "text-red-500 animate-pulse" : "text-emerald-400"
            }`}
          >
            00:{timeLeft.toString().padStart(2, "0")}
          </div>
          {/* circle grid */}
          <div className={`grid grid-cols-3 gap-6 md:gap-10 p-4`}>
            {[...Array(difficulty)].map((_, i) => {
              const isActive = activeCircle?.index === i;
              return (
                <Circle
                  key={i}
                  colorClass={isActive ? activeCircle.color : "bg-gray-100/20"}
                  onClick={() => handleCircleClick(i)}
                />
              );
            })}
          </div>
        </div>
      )}
      <Footer />
      {/* Modal */}
      <ScoreModal
        isOpen={isModalOpen}
        score={score}
        reason={endReason}
        onRestart={resetGame}
      />
      ;
    </div>
  );
};

export default App;
