const plans = [
    {
      name: "Starter",
      price: "$150",
      description: "Perfect for testing AI automation.",
      features: [
        "1 automation agent",
        "3-day delivery",
        "Email setup",
        "1 revision",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Standard",
      price: "$400",
      description: "For businesses ready to scale.",
      features: [
        "2 automation agents",
        "5-day delivery",
        "Email + LinkedIn outreach",
        "2 revisions",
        "Weekly reporting",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Advanced",
      price: "$800",
      description: "Full AI system for serious growth.",
      features: [
        "4 automation agents",
        "7-day delivery",
        "Multi-channel outreach",
        "Unlimited revisions",
        "24/7 monitoring",
        "Priority support",
      ],
      cta: "Get Started",
      popular: false,
    },
  ];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No subscriptions. Pay once, own it forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "bg-gray-900 border-cyan-500 shadow-lg shadow-cyan-500/10"
                  : "bg-gray-900/50 border-gray-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-black text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-400 mb-2">{plan.name}</h3>
                <div className="text-5xl font-bold text-white mb-2">{plan.price}</div>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-cyan-500 hover:bg-cyan-400 text-black"
                    : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Custom enterprise solutions available.{" "}
          <a href="#contact" className="text-cyan-400 hover:underline">
            Contact us for pricing.
          </a>
        </p>
      </div>
    </section>
  );
}