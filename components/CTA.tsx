export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="p-12 bg-gray-900 border border-gray-800 rounded-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Automate?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Tell us what repetitive task is eating up your time. 
            We'll build an AI agent to handle it.
          </p>

          <form className="max-w-xl mx-auto space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <textarea
              placeholder="What task do you want to automate?"
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Get Your Free AI Agent →
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-6">
            We respond within 2 hours. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}