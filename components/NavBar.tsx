import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-lp-black/95 backdrop-blur-sm border-b border-zinc-800 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="font-rock text-3xl tracking-widest text-white uppercase group-hover:text-gray-300 transition-colors">
              CB<span className="text-lp-red group-hover:animate-ping inline-block">.</span>Mem
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {['Legacy', 'Anthems', 'Discography', 'Tributes', 'Support'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative font-rock text-gray-400 hover:text-white px-4 py-2 text-lg uppercase tracking-wider transition-all group overflow-hidden"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lp-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
            </div>
          </div>
          {/* Mobile menu button simplified */}
          <div className="md:hidden">
            <button onClick={() => scrollToSection('anthems')} className="text-gray-300 hover:text-lp-red transition-colors">
              <i className="fas fa-music text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;