import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found — AI Engineer Hub"
        description="The page you are looking for does not exist or has been moved."
        noindex
      />

      <div className="container-content py-20 text-center">
        <p className="text-7xl font-extrabold text-brand-200 mb-4" aria-hidden="true">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist, has been moved, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4" aria-hidden="true" />
            Go Home
          </Link>
          <Link to="/search" className="btn-secondary">
            <Search className="w-4 h-4" aria-hidden="true" />
            Search Articles
          </Link>
        </div>
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="btn-ghost text-sm"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}
