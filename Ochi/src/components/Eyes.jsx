import React, { useEffect, useState } from "react";

function Eyes() {
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
    <div className="eyes bg-zinc-900 w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative bg-cover bg-center w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute flex gap-10 w-1/3 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* Left Eye */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900" style={{ transform: `rotate(${rotate}deg)` }}>
              <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900" style={{ transform: `rotate(${rotate}deg)` }}>
              <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
