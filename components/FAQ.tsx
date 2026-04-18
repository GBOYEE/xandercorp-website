const faqs = [
  {
    question: "How long does it take to build an AI agent?",
    answer: "Most agents are delivered in 3-7 days depending on complexity. Simple automation (like email outreach) takes 3 days. Custom multi-step workflows take up to 7 days. You'll see it working before we consider it done.",
  },
  {
    question: "Will the emails sound robotic or generic?",
    answer: "No. Our agents personalize every message using real data from each prospect — their company, role, recent posts, news. The goal is emails that sound like you wrote them, sent at scale.",
  },
  {
    question: "What if I need changes after delivery?",
    answer: "Every package includes revisions. Starter: 1 revision. Standard: 2 revisions. Advanced: unlimited revisions for 30 days. After that, we offer ongoing support at $50/hour.",
  },
  {
    question: "Do I need technical knowledge to use this?",
    answer: "Zero. We handle all the technical setup. You just tell us what you want to automate, and we deliver a working system. We also provide video walkthroughs so you understand exactly how it works.",
  },
  {
    question: "How do you handle deliverability and spam filters?",
    answer: "We follow email deliverability best practices: proper warm-up, SPF/DKIM setup, sending limits, and content optimization. Our outreach campaigns typically achieve 20-35% open rates.",
  },
  {
    question: "What's your refund policy?",
    answer: "If you're not satisfied with the initial discovery call, it's free. For projects, if we can't deliver what we promised, we refund in full. We're that confident.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Questions? Answered.
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know before we start.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-emerald-500/30 transition-all duration-300"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-gray-500 group-hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed group-open:animate-fadeIn">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Still have questions?{" "}
            <a href="#contact" className="text-emerald-400 hover:underline">
              Let's talk.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}