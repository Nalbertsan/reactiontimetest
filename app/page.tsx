"use client"

import { useState } from 'react';

function Home() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [showWaitArea, setShowWaitArea] = useState(false);
  const [showClickArea, setShowClickArea] = useState(false);
  const [showResultsArea, setShowResultsArea] = useState(false);

  const startReactionTimeTest = () => {
    setShowWaitArea(true);
    console.log(showWaitArea);
    setShowResultsArea(false);
    setTimeout(() => {
      setShowWaitArea(false);
      setShowClickArea(true);
      setStartTime(performance.now());
    }, Math.floor(Math.random() * 4000) + 2000);
  };

  const handleClickColorArea = () => {
    setEndTime(performance.now());
    setShowClickArea(false);
    setShowResultsArea(true);
  };

  const calculateReactionTime = () => {
    if (startTime && endTime) {
      const time = `${endTime - startTime} ms`;
      return time;
    }
    return false;
  };

  return (
    <div className="w-screen h-screen bg-blue-500 flex flex-col items-center justify-center">
      {!showWaitArea && !showClickArea && (
        <button className="font-bold text-xl border p-4 rounded-lg" onClick={startReactionTimeTest} style={{ display: showClickArea ? 'none' : 'block' }}>
          Start Reaction Time Test
        </button>
      )}

      {showWaitArea && (
        <div className="w-full h-full bg-red-500 text-white font-bold text-4xl flex items-center justify-center">
          Waiting...
          {' '}
        </div>
      )}
      {showClickArea && (
        <div className="w-full h-full bg-green-500 text-white font-bold text-4xl flex items-center justify-center" onMouseDown={handleClickColorArea}>
          Click Here
        </div>
      )}
      {showResultsArea && (
        <div className="">
          Reaction Time:
          {' '}
          {calculateReactionTime()}
        </div>
      )}
    </div>
  );
}

export default Home;
