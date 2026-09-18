import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, FileQuestion } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import ArticleCard from '../components/blog/ArticleCard';
import { searchArticles } from '../data/articles';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const results = searchArticles(initialQuery);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  return (
    <>
      <SEOHead
        title={initialQuery ? `Search: ${initialQuery} — AI Engineer Hub` : 'Search — AI Engineer Hub'}
        description="Search AI Engineer Hub for tutorials on AI, Python, Ollama, local AI, and more."
        noindex
      />

      <div className="container-content py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Search</h1>

        {/* Search form */}
        <form onSubmit={handleSubmit} className="mb-8" role="search">
          <label htmlFor="search-input" className="sr-only">Search articles</label>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
            <input
              id="search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, categories, tags…"
              autoFocus
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
            />
          </div>
        </form>

        {/* Results */}
        {initialQuery ? (
          <>
            <p className="text-sm text-gray-500 mb-6">
              {results.length === 0
                ? `No results found for "${initialQuery}"`
                : `${results.length} result${results.length > 1 ? 's' : ''} for "${initialQuery}"`}
            </p>
            {results.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-10 text-center max-w-lg mx-auto">
                <FileQuestion className="w-10 h-10 text-gray-300 mx-auto mb-3" aria-hidden="true" />
                <p className="text-gray-500 mb-3">
                  Try different keywords or browse our categories:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Link to="/ai" className="badge bg-purple-100 text-purple-700">AI</Link>
                  <Link to="/python" className="badge bg-yellow-100 text-yellow-700">Python</Link>
                  <Link to="/ollama" className="badge bg-orange-100 text-orange-700">Ollama</Link>
                  <Link to="/local-ai" className="badge bg-green-100 text-green-700">Local AI</Link>
                  <Link to="/ai-tools" className="badge bg-blue-100 text-blue-700">AI Tools</Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-500 text-center py-10">
            Enter a search term above to find articles.
          </p>
        )}
      </div>
    </>
  );
}
