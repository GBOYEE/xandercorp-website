const testimonials = [
  {
    quote: "Before XanderCorp, I was spending 15 hours weekly on cold outreach. Now my inbox is full of replies and I haven't sent a single email manually in 3 months.",
    author: "Sarah Chen",
    role: "Founder @ TechSaaS",
    result: "15hrs saved/week",
    metric: "35% reply rate",
  },
  {
    quote: "The lead generation agent they built delivers 50+ qualified leads every week. Our sales team went from chasing random prospects to only talking to people who actually want to buy.",
    author: "Marcus Johnson",
    role: "CEO @ GrowthLab",
    result: "50+ leads/week",
    metric: "3x pipeline growth",
  },
  {
    quote: "I was skeptical about AI outreach sounding robotic. But the personalization is insane — my prospects think a human is writing each email. The results speak for themselves.",
    author: "David Park",
    role: "Director @ ScaleUp Agency",
    result: "2.4x response rate",
    metric: "$47K new revenue",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Results</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Businesses that stopped<br />guessing and started scaling
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.author}
              className="p-8 bg-gray-950 border border-gray-900 rounded-2xl hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-emerald-500 text-5xl mb-4 leading-none">"</div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">{testimonial.quote}</p>
              
              {/* Metrics */}
              <div className="flex gap-4 mb-6">
                <div className="px-3 py-1 bg-emerald-500/10 rounded-lg">
                  <span className="text-emerald-400 text-sm font-semibold">{testimonial.result}</span>
                </div>
                <div className="px-3 py-1 bg-gray-800 rounded-lg">
                  <span className="text-gray-400 text-sm font-semibold">{testimonial.metric}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-900">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}