import React from 'react';

const MusicPlayer: React.FC = () => {
  return (
    <section id="anthems" className="py-24 bg-zinc-950 relative border-y border-zinc-800">
      {/* Background visual elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-rock text-white uppercase tracking-tighter mb-4 glitch-text" data-text="THE ANTHEMS">
              The <span className="text-lp-red">Anthems</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light italic mb-8 border-l-4 border-lp-red pl-6 py-2">
              "We're not political, we're not spiritual, we're not religious. We're just people who make music."
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <div className="h-16 w-1 bg-zinc-800 animate-pulse"></div>
              <div className="h-16 w-1 bg-lp-red animate-pulse delay-75"></div>
              <div className="h-16 w-1 bg-zinc-800 animate-pulse delay-150"></div>
              <div className="h-16 w-1 bg-zinc-800 animate-pulse delay-300"></div>
            </div>
          </div>

          {/* Player Container - Styled like an amp/gear */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-zinc-900 p-2 rounded-lg shadow-2xl border-4 border-zinc-800 relative">
              {/* Fake Amp Screws */}
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-zinc-700 flex items-center justify-center">
                 <div className="w-full h-0.5 bg-black rotate-45"></div>
              </div>
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-zinc-700 flex items-center justify-center">
                 <div className="w-full h-0.5 bg-black rotate-45"></div>
              </div>
              <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-zinc-700 flex items-center justify-center">
                 <div className="w-full h-0.5 bg-black rotate-45"></div>
              </div>
              <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-zinc-700 flex items-center justify-center">
                 <div className="w-full h-0.5 bg-black rotate-45"></div>
              </div>

              {/* Mesh Grille Effect Container */}
              <div className="bg-black rounded border border-zinc-700 p-1 relative overflow-hidden">
                {/* Spotify Embed */}
                <iframe 
                  style={{ borderRadius: '12px' }} 
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO47cwRq?utm_source=generator" 
                  width="100%" 
                  height="600" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="relative z-10"
                  title="Linkin Park Spotify Playlist"
                ></iframe>
              </div>
              
              {/* Amp Brand Label */}
              <div className="absolute -bottom-8 right-4">
                 <span className="font-rock text-zinc-700 text-3xl tracking-widest opacity-50 uppercase rotate-[-5deg] block">LP-AMP</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;