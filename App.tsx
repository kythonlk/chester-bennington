import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import MusicPlayer from './components/MusicPlayer';
import Discography from './components/Discography';
import TributeWall from './components/TributeWall';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-lp-red selection:text-white">
      <NavBar />
      <Hero />
      <Biography />
      <MusicPlayer />
      <Discography />
      <TributeWall />
      <Support />
      <Footer />
    </div>
  );
}

export default App;