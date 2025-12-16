import React from 'react';

const Support: React.FC = () => {
  return (
    <section id="support" className="py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <i className="fas fa-hands-helping text-5xl text-lp-accent mb-6"></i>
        <h2 className="text-3xl font-rock uppercase text-white mb-6">Make Chester Proud</h2>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          If you or someone you know is struggling, you are not alone. There is strength in asking for help.
          Let's look out for one another.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://988lifeline.org/" target="_blank" rel="noreferrer" className="block p-6 border border-zinc-700 hover:border-lp-accent hover:bg-zinc-800/50 transition-all rounded group">
            <h3 className="text-xl font-bold text-white group-hover:text-lp-accent mb-2">988 Suicide & Crisis Lifeline</h3>
            <p className="text-gray-400 text-sm">Free and confidential support for people in distress, 24/7.</p>
            <span className="inline-block mt-4 text-lp-accent text-sm font-bold uppercase tracking-wider">Get Help <i className="fas fa-arrow-right ml-1"></i></span>
          </a>

          <a href="https://www.changedirection.org/320-changes-direction/" target="_blank" rel="noreferrer" className="block p-6 border border-zinc-700 hover:border-lp-accent hover:bg-zinc-800/50 transition-all rounded group">
            <h3 className="text-xl font-bold text-white group-hover:text-lp-accent mb-2">320 Changes Direction</h3>
            <p className="text-gray-400 text-sm">Resource co-founded by Talinda Bennington to change the culture of mental health.</p>
            <span className="inline-block mt-4 text-lp-accent text-sm font-bold uppercase tracking-wider">Learn More <i className="fas fa-arrow-right ml-1"></i></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Support;