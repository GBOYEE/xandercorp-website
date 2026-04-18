export default function Problem() {
  const pains = [
    {
      title: "Your team wastes hours on repetitive tasks",
      description: "Cold emails, follow-ups, lead research — work that eats your day but doesn't grow revenue.",
    },
    {
      title: "Leads slip through the cracks",
      description: "Prospects go cold because you can't follow up with everyone fast enough. Money left on the table.",
    },
    {
      title: "Hiring more people isn't the answer",
      description: "More headcount = more complexity, more cost, more management. You need leverage, not more mouths to feed.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Sound familiar?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            The problem isn't your product.<br />It's your bandwidth.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every hour you spend on manual work is an hour not spent closing deals. Your competitors are already automating.
          </p>
        </div>

        <div className="space-y-6">
          {pains.map((pain, index) => (
            <div 
              key={index}
              className="flex gap-6 p-6 bg-red-950/20 border border-red-900/30 rounded-xl"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{pain.title}</h3>
                <p className="text-gray-400">{pain.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300">
            There's a better way. <span className="text-emerald-400 font-semibold">AI agents that work 24/7, never burn out, and scale infinitely.</span>
          </p>
        </div>
      </div>
    </section>
  );
}