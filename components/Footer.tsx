import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm font-sans">
          This is a fan-made memorial. Not officially affiliated with Linkin Park or the Bennington family.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Made with <i className="fas fa-heart text-lp-red mx-1"></i> and Code
        </p>
      </div>
    </footer>
  );
};

export default Footer;
