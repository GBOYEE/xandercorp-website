const plans = [
  {
    name: "Starter",
    price: "$150",
    description: "Perfect for testing AI automation.",
    delivery: "3 days",
    features: [
      "1 automation agent",
      "Email outreach setup",
      "Basic personalization",
      "1 revision",
      "Email support",
    ],
    cta: "Start Small",
    popular: false,
  },
  {
    name: "Standard",
    price: "$400",
    description: "For businesses ready to scale outreach.",
    delivery: "5 days",
    features: [
      "2 automation agents",
      "Email + LinkedIn outreach",
      "Advanced personalization",
      "2 revisions",
      "Weekly performance report",
      "30-day support",
    ],
    cta: "Scale Faster",
    popular: true,
  },
  {
    name: "Advanced",
    price: "$800",
    description: "Full AI system for serious growth.",
    delivery: "7 days",
    features: [
      "4 automation agents",
      "Multi-channel outreach",
      "CRM integration",
      "Unlimited revisions",
      "24/7 monitoring",
      "Priority support",
      "Monthly strategy call",
    ],
    cta: "Go Full AI",
    popular: false,
  },
];

const addOns = [
  { name: "Deployment Setup", price: "+$150", description: "Full setup on your servers" },
  { name: "Additional Agent", price: "+$100", description: "Add another automation" },
  { name: "Fast Delivery", price: "+$100", description: "Cut delivery time in half" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Simple pricing.<br />No surprises.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pay once. Own it forever. No monthly fees unless you want ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-2xl border ${
                plan.popular 
                  ? "bg-gray-950 border-emerald-500 shadow-lg shadow-emerald-500/10" 
                  : "bg-gray-900/50 border-gray-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-black text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500">one-time</span>
                </div>
                <p className="text-gray-500 text-sm">{plan.description}</p>
                <p className="text-emerald-400 text-sm font-medium mt-2">Delivered in {plan.delivery}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`block text-center py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                  plan.popular 
                    ? "bg-emerald-500 hover:bg-emerald-400 text-black" 
                    : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="p-8 bg-gray-950 border border-gray-900 rounded-2xl">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">Need more? Add-ons available</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addOn) => (
              <div key={addOn.name} className="p-4 bg-gray-900/50 rounded-xl text-center">
                <div className="text-xl font-bold text-emerald-400 mb-1">{addOn.price}</div>
                <div className="text-white font-medium mb-1">{addOn.name}</div>
                <div className="text-gray-500 text-sm">{addOn.description}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Need something custom?{" "}
          <a href="#contact" className="text-emerald-400 hover:underline">
            Let's discuss your project.
          </a>
        </p>
      </div>
    </section>
  );
}