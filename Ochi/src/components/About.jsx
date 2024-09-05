import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-900 ">
      <h1 className='font-["Neue_Montreal"]  leading-[3.5vw] text-[3.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className=" flex gap-5 w-full border-t-[2px] border-[#a1b562]  pt-10 mt-20 ">
        <div className="w-1/2">
          <h1 className="text-5xl ">Our approach:</h1>
          <button className=" flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 ">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-cover  
        rounded-3xl">
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default About;
