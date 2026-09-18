import { Link } from 'react-router-dom';
import { Cpu, Twitter, Github, Rss } from 'lucide-react';

const footerLinks = {
  content: [
    { label: 'AI', to: '/ai' },
    { label: 'Python', to: '/python' },
    { label: 'AI Tools', to: '/ai-tools' },
    { label: 'Local AI', to: '/local-ai' },
    { label: 'Ollama', to: '/ollama' },
    { label: 'Remote Jobs', to: '/remote-jobs' },
    { label: 'Tutorials', to: '/tutorials' },
  ],
  site: [
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Disclaimer', to: '/disclaimer' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 text-white mb-3 hover:text-brand-300 transition-colors">
              <Cpu className="w-5 h-5" aria-hidden="true" />
              <span className="font-bold text-lg">AI Engineer Hub</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 max-w-sm leading-relaxed">
              Practical, beginner-friendly tutorials on AI, Python, local AI, Ollama, and remote work. Learn AI, Build Skills, Grow Your Future.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/aiengineerh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/aiengineerh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="/sitemap.xml"
                aria-label="RSS / Sitemap"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Rss className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Topics</h3>
            <ul className="space-y-2">
              {footerLinks.content.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Site</h3>
            <ul className="space-y-2">
              {footerLinks.site.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {year} AI Engineer Hub. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Educational content for informational purposes only.{' '}
            <Link to="/disclaimer" className="underline hover:text-gray-300 transition-colors">
              Disclaimer
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
