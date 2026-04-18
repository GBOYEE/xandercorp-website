const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We hop on a 20-minute call to understand your business, your current sales process, and where you're losing time and money.",
    duration: "Day 1",
  },
  {
    number: "02",
    title: "Custom Design",
    description: "We map out your ideal workflow and design an AI agent specifically for your needs. No cookie-cutter solutions.",
    duration: "Day 2-3",
  },
  {
    number: "03",
    title: "Build & Test",
    description: "We build your agent and test it thoroughly. You'll see it in action before we go live.",
    duration: "Day 4-6",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "Your agent goes live and starts working. We monitor performance and optimize based on real data.",
    duration: "Day 7+",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            From zero to AI agent<br />in 7 days
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No long contracts. No confusing processes. Just a clear path from idea to working AI agent.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent -translate-x-1/2" />
              )}
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl font-bold text-emerald-500">{step.number}</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">{step.duration}</span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-emerald-950/30 border border-emerald-900/50 rounded-xl text-center">
          <p className="text-gray-300">
            <span className="text-emerald-400 font-semibold">Questions before we start?</span> We offer a free audit of your current outreach process before any commitment.
          </p>
        </div>
      </div>
    </section>
  );
}