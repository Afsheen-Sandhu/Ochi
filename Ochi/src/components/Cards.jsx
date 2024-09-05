import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 px-32 '>
        <div className='cardcontainer w-1/2  h-[50vh] '>
            <div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>

                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-3 rounded-full border-2'>&copy; 2019-2022  </button>
            </div>
        
        </div>
        <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
            <div className='card relative w-1/2 h-full bg-[#212121] flex items-center justify-center'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-3 rounded-full border-2'>RATING 5.0 ON CLUTCH  </button>

            </div>
            <div className='card relative w-1/2 h-full bg-[#212121] flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute text-sm  ml-2 left-1 bottom-10 px-2 py-3 rounded-full border-2'>BUSINESS BOOTCAMP ALUMNI </button>

            </div>
        </div>
    </div>
  )
}

export default Cards
