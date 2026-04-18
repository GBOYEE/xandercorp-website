const testimonials = [
    {
      quote: "XanderCorp built me a lead generation agent that delivers 50+ qualified leads every week. I went from spending 10 hours on outreach to 0.",
      author: "Sarah Chen",
      role: "Founder, TechSaaS",
      result: "10hrs saved/week",
    },
    {
      quote: "The outreach automation system is insane. Personalized emails going out daily, follow-ups happening automatically. My reply rate doubled.",
      author: "Marcus Johnson",
      role: "CEO, GrowthLab",
      result: "2x reply rate",
    },
    {
      quote: "I needed a custom AI agent for my agency workflow. Delivered in 4 days, and it's been running perfectly for 3 months now.",
      author: "David Park",
      role: "Director, DigitalAgency",
      result: "3 months uptime",
    },
  ];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Results That Speak
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real businesses. Real outcomes. Real AI agents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-8 bg-gray-900/50 border border-gray-800 rounded-2xl"
            >
              <div className="text-cyan-400 text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
                <div className="text-cyan-400 text-sm font-semibold bg-cyan-500/10 px-3 py-1 rounded-full">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}