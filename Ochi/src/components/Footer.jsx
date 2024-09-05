import React from 'react';

function Footer() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white flex justify-between items-center p-10'>
      {/* Left Side */}
      <div className='w-1/2 flex flex-col justify-center'>
        <h1 className='text-7xl font-bold'>EYE-</h1>
        <h1 className='text-7xl font-bold'>OPENING</h1>
      </div>

      {/* Right Side */}
      <div className='w-1/2 flex flex-col justify-center items-end'>
        <h1 className='text-7xl font-bold mb-16'>PRESENTATIONS</h1>

        {/* Links Section */}
        <div className='flex justify-between w-full'>
          <div className='text-right'>
            <h2 className='text-lg mb-2'>S:</h2>
            <ul>
              <li><a href='#' className='hover:underline'>Instagram</a></li>
              <li><a href='#' className='hover:underline'>Behance</a></li>
              <li><a href='#' className='hover:underline'>Facebook</a></li>
              <li><a href='#' className='hover:underline'>Linkedin</a></li>
            </ul>
          </div>

          <div className='text-right mx-8'>
            <h2 className='text-lg mb-2'>L:</h2>
            <ul>
              <li>202-1965 W 4th Ave Vancouver, Canada</li>
              <li>30 Chukarina St, Lviv, Ukraine</li>
            </ul>
          </div>

          <div className='text-right'>
            <h2 className='text-lg mb-2'>M:</h2>
            <ul>
              <li><a href='#' className='hover:underline'>Home</a></li>
              <li><a href='#' className='hover:underline'>Services</a></li>
              <li><a href='#' className='hover:underline'>Our work</a></li>
              <li><a href='#' className='hover:underline'>About us</a></li>
              <li><a href='#' className='hover:underline'>Insights</a></li>
              <li><a href='#' className='hover:underline'>Contact us</a></li>
            </ul>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Footer;
