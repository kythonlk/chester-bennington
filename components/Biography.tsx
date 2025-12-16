import React from 'react';

const Biography: React.FC = () => {
  return (
    <section id="legacy" className="py-24 bg-lp-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -inset-4 bg-lp-red/20 blur-xl rounded-lg"></div>
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Chester performing" 
              className="relative rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border-l-4 border-lp-red"
            />
          </div>

          <div>
            <h2 className="text-4xl font-rock uppercase text-white mb-6 tracking-wide">
              The Voice of a <span className="text-lp-red">Generation</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-sans leading-relaxed text-lg">
              <p>
                Chester Charles Bennington was more than just a vocalist; he was a conduit for the raw, unfiltered emotions of millions. As the lead singer of Linkin Park, he bridged the gap between metal and hip-hop, screaming the pain we all felt but couldn't articulate.
              </p>
              <p>
                From the diamond-certified debut <span className="text-white font-semibold">Hybrid Theory</span> to the pop-infused <span className="text-white font-semibold">One More Light</span>, his versatility was unmatched. He possessed the rare ability to transition from an angelic melody to a gut-wrenching scream in a single breath.
              </p>
              <p className="border-l-2 border-zinc-700 pl-4 italic">
                His legacy isn't just in the records sold, but in the lives saved by listeners who realized they weren't alone in their darkness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;