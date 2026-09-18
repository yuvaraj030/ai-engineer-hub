import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Cpu } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'AI', to: '/ai' },
  { label: 'Python', to: '/python' },
  { label: 'AI Tools', to: '/ai-tools' },
  { label: 'Local AI', to: '/local-ai' },
  { label: 'Ollama', to: '/ollama' },
  { label: 'Remote Jobs', to: '/remote-jobs' },
  { label: 'Tutorials', to: '/tutorials' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileOpen(false);
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-150 ${
      isActive ? 'text-brand-600' : 'text-gray-600 hover:text-brand-600'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : 'border-b border-gray-100'
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-brand-700 hover:text-brand-800 transition-colors"
            aria-label="AI Engineer Hub home"
          >
            <Cpu className="w-6 h-6" aria-hidden="true" />
            <span className="font-bold text-lg leading-tight">
              AI Engineer <span className="text-brand-500">Hub</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={navLinkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop search */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center" role="search">
            <label htmlFor="desktop-search" className="sr-only">Search articles</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
              <input
                id="desktop-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles…"
                className="pl-9 pr-4 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg w-48 focus:w-64 focus:bg-white focus:border-brand-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>
          </form>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link to="/search" aria-label="Search" className="text-gray-500 hover:text-brand-600 transition-colors">
              <Search className="w-5 h-5" aria-hidden="true" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="text-gray-500 hover:text-brand-600 transition-colors p-1"
            >
              {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="container-content py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
