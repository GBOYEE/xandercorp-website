const services = [
  {
    title: "Lead Generation Agent",
    description: "Scouts the internet, finds your ideal customers, and delivers qualified leads daily — on autopilot.",
    icon: "🎯",
    features: ["Automated prospecting", "LinkedIn & email research", "Lead scoring & prioritization"],
  },
  {
    title: "Outreach Automation",
    description: "Sends personalized cold emails and LinkedIn messages at scale. Tracks opens, clicks, and replies.",
    icon: "📧",
    features: ["Email & LinkedIn outreach", "A/B testing", "Response tracking"],
  },
  {
    title: "Sales Pipeline Agent",
    description: "Manages your entire sales pipeline — follow-ups, scheduling, deal tracking, and closing reminders.",
    icon: "💰",
    features: ["Auto follow-ups", "Calendar integration", "CRM updates"],
  },
  {
    title: "Custom AI Systems",
    description: "We build any autonomous agent tailored to your business. From data collection to customer support.",
    icon: "⚡",
    features: ["Custom workflows", "API integrations", "Continuous learning"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Build
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Autonomous AI agents that work 24/7, generate revenue, and scale your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}