import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Eyes2 from './components/Eyes2';
import Footer from './components/Footer';
import LoadingPage from './components/LoadingPage';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => locomotiveScroll.destroy();
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingPage onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="w-full text-white bg-zinc-900 min-h-screen" data-scroll-container>
          <NavBar />
          <LandingPage />
          <Marquee />
          <About />
          <Eyes />
          <Featured />
          <Cards />
          <Eyes2 />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
