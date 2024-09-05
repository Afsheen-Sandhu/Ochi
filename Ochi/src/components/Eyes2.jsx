import React, { useEffect, useState } from "react";

function Eyes2() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes bg-[#C7E959] w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Eyes Container */}
      <div className="relative flex gap-5 items-center justify-center z-10 mb-10">
        {/* Left Eye */}
        <div className="flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-white">
          <div
            className="relative w-2/3 h-2/3 rounded-full bg-black"
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
              <div className="w-8 h-8 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        {/* Right Eye */}
        <div className="flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-white">
          <div
            className="w-2/3 h-2/3 rounded-full bg-black relative"
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <div className="line w-full absolute h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <div className="w-8 h-8 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <h1 className="text-[7vw] font-bold text-black  leading-tight tracking-tight  text-center z-0 relative -mt-10">
        READY <br />
        TO START <br />
        THE PROJECT?
      </h1>

      {/* Buttons */}
      <div className="mt-16 flex flex-col items-center z-10">
        <button className="bg-black text-white text-xl px-10 py-3 rounded-full mb-5">
          START THE PROJECT
        </button>
        <button className="border-2 border-black text-black text-xl px-10 py-3 rounded-full">
          HELLO@OCHI.DESIGN
        </button>
      </div>
    </div>
  );
}

export default Eyes2;
