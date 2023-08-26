import React from 'react';
import ParticleCanvas from '@/components/particles';
import Navbar from '@/sections/Navbar';
import SocialIcons from '@/components/SocialIcons';
import Email from '@/components/Email';
import Home from '@/sections/Home';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Porjects from '@/sections/Porjects';
import Contact from '@/sections/Contact';
import Head from 'next/head';
import { useState } from 'react';
import Loader from '@/components/Loader';

function Index() {
  const canvasContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
  };

  const [isLoading, setIsLoading] = useState(true);
  const[showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  }

  return (
    <div className='app'>
      <Head>
        <title>Suraj Nair</title>
        <link rel='shortcut icon' href='/svgviewer-output (1).ico' />
      </Head>
      {
        showContent && (
          <>
      {/* <div style={canvasContainerStyle}>
        <ParticleCanvas />
      </div> */}
      <div className='content-container'>
        <Navbar />
        <SocialIcons />
        <Email />
        <main>
          <Home />
          <About />
          <Experience />
          <Porjects />
          <Contact />
        </main>
      </div>
          
          </>
        )
      }
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded}/>

    </div>
  );
}

export default Index;
