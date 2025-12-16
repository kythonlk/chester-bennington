import React, { useState } from 'react';
import { generateLyricalTribute } from '../services/geminiService';
import { Tribute } from '../types';

const TributeWall: React.FC = () => {
  const [memory, setMemory] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [tributes, setTributes] = useState<Tribute[]>([
    {
      id: '1',
      author: 'Mike S.',
      originalMessage: "We miss you brother.",
      lyricalVersion: "Shadows lengthen on the stage we built,\nA brother lost in time's heavy quilt.\nThe microphone stands, a silent ghost,\nTo the friend we loved the most.",
      timestamp: Date.now()
    }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!memory.trim() || !author.trim()) return;

    setLoading(true);
    const lyrical = await generateLyricalTribute(memory);
    
    const newTribute: Tribute = {
      id: Date.now().toString(),
      author: author,
      originalMessage: memory,
      lyricalVersion: lyrical,
      timestamp: Date.now()
    };

    setTributes(prev => [newTribute, ...prev]);
    setMemory('');
    setAuthor('');
    setLoading(false);
  };

  return (
    <section id="tributes" className="py-24 bg-lp-black relative overflow-hidden">
      {/* Background texture element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lp-red/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Input Section */}
          <div>
            <h2 className="text-4xl font-rock text-white uppercase mb-2">The Echo Chamber</h2>
            <p className="text-gray-400 mb-8 font-light">
              Share a memory or feeling. Our AI, inspired by the nu-metal era, will transform your words into a lyrical tribute.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/50 p-8 border border-zinc-800 rounded-lg backdrop-blur-sm">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
                <input 
                  type="text" 
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full bg-black border border-zinc-700 text-white p-3 focus:outline-none focus:border-lp-red transition-colors font-sans"
                  placeholder="Enter your name..."
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Message</label>
                <textarea 
                  rows={4}
                  value={memory}
                  onChange={(e) => setMemory(e.target.value)}
                  className="w-full bg-black border border-zinc-700 text-white p-3 focus:outline-none focus:border-lp-red transition-colors font-sans"
                  placeholder="How did Chester inspire you?"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 uppercase font-rock tracking-widest text-lg transition-all ${loading ? 'bg-zinc-800 text-gray-500 cursor-not-allowed' : 'bg-lp-red hover:bg-red-700 text-white'}`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-circle-notch fa-spin mr-2"></i> Composing...
                  </span>
                ) : 'Ignite Tribute'}
              </button>
            </form>
          </div>

          {/* Wall Display */}
          <div className="h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-zinc-700">
            <h3 className="text-xl font-rock text-gray-500 uppercase mb-6 text-right border-b border-zinc-800 pb-2">Recent Echoes</h3>
            <div className="space-y-6">
              {tributes.map((t) => (
                <div key={t.id} className="group relative bg-zinc-900 p-6 border-l-2 border-zinc-700 hover:border-lp-red transition-colors">
                  <div className="absolute top-4 right-4 text-zinc-700">
                    <i className="fas fa-quote-right text-2xl"></i>
                  </div>
                  <div className="mb-4">
                    <p className="text-white font-serif italic text-lg leading-relaxed whitespace-pre-line">
                      "{t.lyricalVersion}"
                    </p>
                  </div>
                  <div className="flex justify-between items-end border-t border-zinc-800 pt-4 mt-2">
                    <div>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{t.author}</p>
                      <p className="text-zinc-600 text-xs mt-1">Original: "{t.originalMessage}"</p>
                    </div>
                    <div className="text-lp-red animate-flicker">
                      <i className="fas fa-fire-alt"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TributeWall;