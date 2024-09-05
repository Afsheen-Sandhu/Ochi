import React, { useState, useEffect } from 'react';

// Animated SVG component
const AnimatedSVG = () => (
  <svg
    className="animate-spin h-16 w-16 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4v7l3 3m-6-3v7l-3-3m6-7a9 9 0 100 18 9 9 0 000-18z"
    />
  </svg>
);

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100; // Ensure progress is capped at 100%
        }
        return prevProgress + 1;
      });
    }, 20); // Adjust the speed of the progress

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-zinc-900 flex flex-col justify-center items-center z-50">
      <AnimatedSVG />
      <div className="mt-6 text-center">
        <div className="w-64 h-1 bg-gray-700 mb-4">
          <div
            className="h-full bg-green-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-white text-xl font-sans">{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingPage;
