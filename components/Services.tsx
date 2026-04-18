const services = [
  {
    title: "Lead Generation Agent",
    outcome: "50+ qualified leads delivered weekly",
    description: "Scouts LinkedIn, Crunchbase, and industry databases to find your ideal customers. Qualifies and scores them. Delivers a daily shortlist to your inbox.",
    features: [
      "Automated prospecting across 10+ platforms",
      "Lead scoring based on firmographics",
      "Daily digest to your email or CRM",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Outreach Automation",
    outcome: "2x your response rate",
    description: "Sends personalized cold emails and LinkedIn messages at scale. Each message is customized based on prospect data — not generic templates.",
    features: [
      "Email + LinkedIn multi-channel outreach",
      "Personalization using real company data",
      "Automatic follow-up sequences",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Follow-Up Pipeline",
    outcome: "Never miss a hot lead again",
    description: "Automatically follows up with every prospect. Reminds you when to jump on a call. Tracks every interaction so nothing falls through.",
    features: [
      "Smart follow-up timing",
      "Calendar integration for scheduling",
      "Slack/email notifications for hot leads",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Custom AI Systems",
    outcome: "Built for your exact workflow",
    description: "Need something specific? We build autonomous agents tailored to your business processes — from data collection to customer support.",
    features: [
      "Custom workflow design",
      "API integrations (500+ tools)",
      "Continuous learning & improvement",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">What We Build</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI agents that generate revenue.<br />Not just automate tasks.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every agent is custom-built for your business. No templates. No shortcuts. Just results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group p-8 bg-gray-950 border border-gray-900 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-emerald-400 text-sm font-medium mb-3">{service.outcome}</p>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}