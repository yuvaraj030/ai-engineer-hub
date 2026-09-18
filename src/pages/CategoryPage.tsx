import { Link } from 'react-router-dom';
import { FileQuestion, Home } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { getCategory } from '../data/categories';
import { getArticlesByCategory } from '../data/articles';
import ArticleCard from '../components/blog/ArticleCard';
import Breadcrumb from '../components/ui/Breadcrumb';
import Newsletter from '../components/ui/Newsletter';
import AdSlot from '../components/ui/AdSlot';

interface CategoryPageProps {
  slug: string;
}

export default function CategoryPage({ slug }: CategoryPageProps) {
  const category = getCategory(slug);
  const categoryArticles = getArticlesByCategory(slug);

  if (!category) {
    return (
      <div className="container-content py-20 text-center">
        <SEOHead
          title="Category Not Found"
          description="The category you are looking for does not exist."
          noindex
        />
        <FileQuestion className="w-12 h-12 text-gray-300 mx-auto mb-4" aria-hidden="true" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Category not found</h1>
        <p className="text-gray-500 mb-6">The category you are looking for does not exist.</p>
        <Link to="/" className="btn-primary">
          <Home className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${category.name} — AI Engineer Hub`}
        description={category.description}
        canonical={`/${category.slug}`}
      />

      <div className="container-content py-10">
        <Breadcrumb items={[{ label: category.name }]} />

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl" aria-hidden="true">{category.icon}</span>
            <h1 className="text-3xl font-extrabold text-gray-900">{category.name}</h1>
          </div>
          <p className="text-gray-600 max-w-2xl leading-relaxed">{category.description}</p>
        </div>

        <AdSlot variant="in-article" />

        {/* Articles */}
        {categoryArticles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-10 text-center">
            <p className="text-gray-500 text-lg mb-2">No articles in this category yet.</p>
            <p className="text-gray-400 text-sm">New content is published regularly — check back soon!</p>
          </div>
        )}

        {/* Newsletter */}
        <div className="mt-14">
          <Newsletter variant="banner" />
        </div>
      </div>
    </>
  );
}
