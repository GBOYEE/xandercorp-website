export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Results</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Real results from real clients
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Case studies and testimonials from completed projects. 
            <br />Check back soon or reach out to discuss your project.
          </p>
        </div>

        {/* Placeholder cards - replace with real testimonials when available */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-950 border border-gray-900 rounded-2xl">
            <div className="text-emerald-500 text-5xl mb-4 leading-none">"</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your testimonial here. Let&apos;s discuss your project and create results like these.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-900">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">
                ?
              </div>
              <div>
                <div className="text-white font-medium">Your Name</div>
                <div className="text-gray-500 text-sm">Your Company</div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-950 border border-gray-900 rounded-2xl">
            <div className="text-emerald-500 text-5xl mb-4 leading-none">"</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ready to see what we can build for you? Let&apos;s talk about your goals.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-900">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">
                ?
              </div>
              <div>
                <div className="text-white font-medium">Your Company</div>
                <div className="text-gray-500 text-sm">Your Role</div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-950 border border-gray-900 rounded-2xl">
            <div className="text-emerald-500 text-5xl mb-4 leading-none">"</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Book a free strategy call and let&apos;s discuss your automation needs.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-900">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">
                ?
              </div>
              <div>
                <div className="text-white font-medium">Your Business</div>
                <div className="text-gray-500 text-sm">Your Position</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}