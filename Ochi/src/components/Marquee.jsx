import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-sectio data-scroll-speed=".1" className='w-full bg-[#004D43] py-20 rounded-tl-3xl'>
      <div className='text-[24vw] border-t-2 border-zinc-300 flex border-b-2 whitespace-nowrap uppercase font-["Founders_Grotesk_X-Condensed "] font-extrabold gap-10 overflow-hidden'>
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          className='text-[20vw] pt-0 mb-2'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          className='text-[20vw] pt-0 -mb-2'
        >
          we are ochi
         
        </motion.h1>
        
      
     
      </div>
    </div>
  );
}

export default Marquee;
