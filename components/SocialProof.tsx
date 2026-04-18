export default function SocialProof() {
  const stats = [
    { number: "500+", label: "Leads Generated Monthly" },
    { number: "35%", label: "Average Reply Rate" },
    { number: "4.2x", label: "ROI on Outreach" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950 border-y border-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="text-center">
          <p className="text-gray-600 text-sm uppercase tracking-wider">
            Trusted by 20+ B2B businesses worldwide
          </p>
        </div>
      </div>
    </section>
  );
}