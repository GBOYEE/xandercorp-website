const projects = [
  {
    name: "Axiom Core",
    description: "AI operating system that orchestrates multiple agents for autonomous business operations.",
    tags: ["Multi-Agent", "FastAPI", "Redis"],
    stats: "50+ tasks automated daily",
  },
  {
    name: "HiveSec Ecosystem",
    description: "Security operations platform with 5 AI agents monitoring and responding to threats 24/7.",
    tags: ["Security", "Streamlit", "Multi-Agent"],
    stats: "Deployed for enterprise clients",
  },
  {
    name: "Xander Nexus",
    description: "Unified AI control plane that manages lead generation, outreach, and pipeline tracking.",
    tags: ["Next.js", "Postgres", "AI"],
    stats: "500+ leads processed monthly",
  },
  {
    name: "Civic Sentinel",
    description: "AI-powered code review agent that detects vulnerabilities and suggests fixes automatically.",
    tags: ["Code Review", "Security", "AI"],
    stats: "1000+ issues detected",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built & Deployed
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Production AI systems running autonomously for real businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <span className="text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                  Live
                </span>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-sm text-cyan-400 font-medium">{project.stats}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}