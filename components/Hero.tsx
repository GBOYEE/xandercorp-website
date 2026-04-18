export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-2 mb-8 text-sm font-medium text-cyan-400 border border-cyan-500/30 rounded-full bg-cyan-500/5">
          AI Agent Systems That Work 24/7
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Stop Doing Work.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Let AI Do It.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          XanderCorp builds autonomous AI agents that generate leads, automate outreach, 
          and close deals — while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/25"
          >
            Get Your AI Agent →
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-gray-700 hover:border-gray-500 text-white font-medium rounded-lg transition-all duration-200"
          >
            See Examples
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            20+ Production Agents Deployed
          </div>
          <div>•</div>
          <div>3-7 Day Delivery</div>
          <div>•</div>
          <div>24/7 Autonomous Operation</div>
        </div>
      </div>
    </section>
  );
}