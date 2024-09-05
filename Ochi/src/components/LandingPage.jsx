import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 border-t-2">
      <div className="textstrucrure mt-52 px-20">
        {["We Create", "EYE OPENING", "PRESENTATION"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && <motion.div initial={{width: 0}} 
                transition={{ ease:[0.76, 0, 0.24, 1] , duration:1 }}
                
                animate={{width:"9vw"}} className="w-[9.5vw] h-[5vw] relative top-[1.5vw] mr-[1vw] bg-cover bg-center rounded-lg  "> 
                  <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>}
                <div className=""></div>
                <h1 className='uppercase text-[7.5vw] font-["Founders_Grotesk_X-Condensed Lt"] leading-[7vw] tracking-tighter font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-36 flex justify-between items-center py-36 px-20">
        {[
          "for public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="start-the-project px-5 py-2 border-2 border-zinc-500 rounded-full font-light text-md uppercase">
            Start the project
          </div>
          <div className="circle w-8 h-8 flex items-center justify-center border-2 border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong className="text-zinc-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
