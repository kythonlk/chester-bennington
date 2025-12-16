import React from 'react';
import { Album } from '../types';

const albums: Album[] = [
  { title: "Hybrid Theory", year: "2000", coverUrl: "https://picsum.photos/300/300?random=1", keyTrack: "In The End" },
  { title: "Meteora", year: "2003", coverUrl: "https://picsum.photos/300/300?random=2", keyTrack: "Numb" },
  { title: "Minutes to Midnight", year: "2007", coverUrl: "https://picsum.photos/300/300?random=3", keyTrack: "What I've Done" },
  { title: "A Thousand Suns", year: "2010", coverUrl: "https://picsum.photos/300/300?random=4", keyTrack: "The Catalyst" },
  { title: "Living Things", year: "2012", coverUrl: "https://picsum.photos/300/300?random=5", keyTrack: "Burn It Down" },
  { title: "The Hunting Party", year: "2014", coverUrl: "https://picsum.photos/300/300?random=6", keyTrack: "Guilty All the Same" },
  { title: "One More Light", year: "2017", coverUrl: "https://picsum.photos/300/300?random=7", keyTrack: "Heavy" },
];

const Discography: React.FC = () => {
  return (
    <section id="discography" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-rock text-white uppercase tracking-tight">Sonic <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Evolution</span></h2>
          <div className="h-1 w-24 bg-lp-red mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {albums.map((album, idx) => (
            <div key={idx} className="group relative aspect-square bg-black overflow-hidden cursor-default">
              <img 
                src={album.coverUrl} 
                alt={album.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-bold font-rock text-lg uppercase leading-none">{album.title}</h3>
                  <p className="text-lp-red text-sm font-sans font-semibold">{album.year}</p>
                  <p className="text-xs text-gray-400 mt-1 font-sans">Key Track: {album.keyTrack}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Grey Daze / Dead By Sunrise placeholder */}
          <div className="aspect-square bg-zinc-800 flex items-center justify-center border border-zinc-700 p-6 text-center group">
             <div>
                <i className="fas fa-compact-disc text-4xl text-zinc-600 mb-2 group-hover:text-white transition-colors"></i>
                <p className="text-gray-500 text-sm font-sans uppercase">Side Projects &<br/>Collaborations</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discography;