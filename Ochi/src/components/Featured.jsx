import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Featured = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const fydeRef = useRef([]);
  const viseRef = useRef([]);

  useEffect(() => {
    if (hoverIndex === 0) {
      gsap.to(fydeRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power4.out",
      });
      gsap.to(viseRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.in",
      });
    } else if (hoverIndex === 1) {
      gsap.to(viseRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power4.out",
      });
      gsap.to(fydeRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.in",
      });
    } else {
      gsap.to(fydeRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.in",
      });
      gsap.to(viseRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.in",
      });
    }
  }, [hoverIndex]);

  return (
    <div className="w-full py-20">
      <div className="w-full border-b-[1px] border-zinc-700 pb-20 px-20">
        <h1 className='font-["Neue_Montreal"] text-7xl tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex mt-10 gap-10">
          <div
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute z-50 flex left-full -translate-x-1/2 top-[30%] leading-none text-6xl text-[#CDEA68] tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <span
                  key={index}
                  ref={(el) => (fydeRef.current[index] = el)}
                  className="inline-block transform translate-y-full opacity-0"
                >
                  {item}
                </span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-cover">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>

          <div
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex right-full translate-x-1/2 z-[9999] top-[30%] leading-none text-6xl tracking-tighter text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <span
                  key={index}
                  ref={(el) => (viseRef.current[index] = el)}
                  className="inline-block transform translate-y-full opacity-0"
                >
                  {item}
                </span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-cover">
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
