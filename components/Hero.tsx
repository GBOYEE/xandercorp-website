export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/40 via-black to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 backdrop-blur-sm">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          For B2B Businesses Ready to Scale
        </div>

        {/* Headline - WHO + WHAT + RESULT */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          <span className="block">We help SaaS founders</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
            automate outreach
          </span>
          <span className="block mt-2">and close more deals.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Custom AI agents that find leads, send personalized emails, and follow up automatically — so your sales team focuses on closing, not prospecting.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="#contact" 
            className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              Book a Free Strategy Call
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a 
            href="#process" 
            className="px-8 py-4 border border-gray-700 hover:border-gray-500 text-white font-medium rounded-xl transition-all duration-300 hover:bg-gray-900/50"
          >
            See How It Works
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white">20+</span>
            <span className="text-left text-sm">Production<br />Agents</span>
          </div>
          <div className="w-px h-12 bg-gray-800" />
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white">3-7</span>
            <span className="text-left text-sm">Days to<br />Delivery</span>
          </div>
          <div className="w-px h-12 bg-gray-800" />
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white">40+</span>
            <span className="text-left text-sm">Hours Saved<br />Per Week</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}