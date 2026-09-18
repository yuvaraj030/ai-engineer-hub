import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { StructuredData, websiteSchema, organizationSchema } from '../components/seo/StructuredData';
import ArticleCard from '../components/blog/ArticleCard';
import Newsletter from '../components/ui/Newsletter';
import { articles, getFeaturedArticles } from '../data/articles';
import { categories } from '../data/categories';

export default function HomePage() {
  const featured = getFeaturedArticles();
  const latest = articles.slice(0, 6);

  return (
    <>
      <SEOHead
        title="AI Engineer Hub — Learn AI, Build Skills, Grow Your Future"
        description="Practical beginner-friendly tutorials on AI, Python, local AI, Ollama, AI tools and remote work."
        canonical="/"
      />
      <StructuredData data={websiteSchema()} />
      <StructuredData data={organizationSchema()} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white border-b border-gray-100">
        <div className="container-content py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-brand-600 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Beginner-friendly AI & Python tutorials</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
              Learn AI, Python &amp;&nbsp;Build Real&nbsp;Skills
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Practical beginner-friendly tutorials on AI, Python, local AI, Ollama, AI tools and remote work.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/tutorials" className="btn-primary">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                Start Learning
              </Link>
              <Link to="/ollama" className="btn-secondary">
                Latest Articles
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="container-content py-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
            <Link to="/ollama" className="btn-ghost text-sm">
              View all <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((a) => (
              <ArticleCard key={a.id} article={a} size="featured" />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="container-content py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explore Topics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(c => c.slug !== 'tutorials').map((cat) => (
              <Link
                key={cat.id}
                to={`/${cat.slug}`}
                className="bg-white rounded-xl border border-gray-100 p-5 text-center hover:shadow-md hover:border-brand-200 transition-all duration-200 group"
              >
                <span className="text-3xl block mb-2" aria-hidden="true">{cat.icon}</span>
                <span className="font-semibold text-gray-900 text-sm group-hover:text-brand-600 transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container-content py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
        {articles.length > 6 && (
          <div className="text-center mt-10">
            <Link to="/tutorials" className="btn-secondary">
              View All Articles <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="container-content pb-16">
        <Newsletter variant="banner" />
      </section>
    </>
  );
}
