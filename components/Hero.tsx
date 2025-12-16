import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-lp-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale contrast-125 brightness-50"
        style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-lp-black via-transparent to-black/80"></div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#000000_120%)]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-lp-red text-lg md:text-xl font-bold tracking-[0.5em] uppercase mb-6 animate-pulse-slow">
          1976 — 2017
        </h2>
        
        {/* Glitch Effect Title */}
        <div className="relative mb-8 group">
          <h1 
            className="text-6xl md:text-9xl font-rock text-white font-bold uppercase tracking-tighter drop-shadow-2xl glitch-text relative z-10"
            data-text="Chester Bennington"
          >
            Chester <br className="md:hidden"/> Bennington
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 font-light italic mb-10 max-w-2xl mx-auto border-t border-b border-zinc-700 py-6">
          "Who cares if one more light goes out? Well, I do."
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('anthems')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-3 bg-white text-black font-rock tracking-widest uppercase overflow-hidden transition-all hover:bg-lp-red hover:text-white clip-path-slant"
            >
              <span className="relative z-10">Listen Now</span>
              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>

            <button 
              onClick={() => document.getElementById('tributes')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-zinc-500 text-gray-300 font-rock tracking-widest uppercase hover:border-lp-red hover:text-lp-red transition-colors"
            >
              Light a Candle
            </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-zinc-600 text-2xl"></i>
      </div>
    </div>
  );
};

export default Hero;