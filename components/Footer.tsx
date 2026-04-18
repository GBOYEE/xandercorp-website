export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">X</span>
            </div>
            <div>
              <div className="text-white font-semibold">XanderCorp</div>
              <div className="text-gray-500 text-sm">AI Agent Systems</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <a 
              href="mailto:xanderaicorp@gmail.com" 
              className="hover:text-emerald-400 transition-colors"
            >
              xanderaicorp@gmail.com
            </a>
            <span>•</span>
            <a 
              href="https://github.com/GBOYEE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a 
              href="https://linkedin.com/in/gboyee" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
          © 2026 XanderCorp. Built with AI agents. Running autonomously.
        </div>
      </div>
    </footer>
  );
}