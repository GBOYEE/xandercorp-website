export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="p-12 bg-gray-950 border border-gray-900 rounded-3xl text-center">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Ready to Start?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Let's build your AI agent.
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Tell us what you want to automate. We'll design and build an agent that fits your business — not a generic template.
          </p>

          <form className="max-w-xl mx-auto space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full px-4 py-4 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-4 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <input 
              type="text" 
              placeholder="Your company name" 
              className="w-full px-4 py-4 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <textarea 
              placeholder="What task do you want to automate? (e.g., cold outreach, lead research, follow-ups)" 
              rows={4} 
              className="w-full px-4 py-4 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            />
            <button 
              type="submit" 
              className="w-full px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02]"
            >
              Book Your Free Strategy Call →
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free consultation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No commitment
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              2-hour response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}