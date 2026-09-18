import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, RefreshCw, ArrowLeft, ArrowRight, Home, FileQuestion, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import { StructuredData, articleSchema, breadcrumbSchema, faqSchema } from '../components/seo/StructuredData';
import Breadcrumb from '../components/ui/Breadcrumb';
import ContentRenderer from '../components/blog/ContentRenderer';
import TableOfContents from '../components/blog/TableOfContents';
import ShareButtons from '../components/blog/ShareButtons';
import ArticleCard from '../components/blog/ArticleCard';
import AdSlot from '../components/ui/AdSlot';
import Newsletter from '../components/ui/Newsletter';
import { getArticleBySlug, getRelatedArticles, articles } from '../data/articles';
import { getCategory } from '../data/categories';
import { getAuthor } from '../data/authors';
import { formatDate } from '../utils/formatDate';
import { slugify } from '../utils/formatDate';
import type { TocItem } from '../components/blog/TableOfContents';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="container-content py-20 text-center">
        <SEOHead
          title="Article Not Found"
          description="The article you are looking for does not exist."
          noindex
        />
        <FileQuestion className="w-12 h-12 text-gray-300 mx-auto mb-4" aria-hidden="true" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Article not found</h1>
        <p className="text-gray-500 mb-6">The article you are looking for may have been moved or does not exist.</p>
        <Link to="/" className="btn-primary">
          <Home className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    );
  }

  const category = getCategory(article.category);
  const author = getAuthor(article.author);
  const related = getRelatedArticles(article);
  const fullUrl = `https://ai-engineer-hub-tau.vercel.app/articles/${article.slug}`;

  // Build TOC
  const tocItems: TocItem[] = article.content
    .filter((n) => n.type === 'h2' || n.type === 'h3')
    .map((n) => ({
      id: slugify(n.text || ''),
      text: n.text || '',
      level: n.type as 'h2' | 'h3',
    }));

  // Prev / Next
  const currentIdx = articles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIdx > 0 ? articles[currentIdx - 1] : undefined;
  const nextArticle = currentIdx < articles.length - 1 ? articles[currentIdx + 1] : undefined;

  // Breadcrumb schema
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ai-engineer-hub-tau.vercel.app/' },
    ...(category ? [{ name: category.name, url: `https://ai-engineer-hub-tau.vercel.app/${category.slug}` }] : []),
    { name: article.title, url: fullUrl },
  ];

  return (
    <>
      <SEOHead
        title={article.seoTitle}
        description={article.metaDescription}
        canonical={`/articles/${article.slug}`}
        ogType="article"
        article={{
          publishedTime: article.publishedDate,
          modifiedTime: article.updatedDate,
          author: author?.name,
          tags: article.tags,
        }}
      />
      <StructuredData
        data={articleSchema({
          title: article.title,
          description: article.metaDescription,
          slug: article.slug,
          publishedDate: article.publishedDate,
          updatedDate: article.updatedDate,
          authorName: author?.name || 'AI Engineer Hub',
          imageUrl: article.featuredImage || undefined,
        })}
      />
      <StructuredData data={breadcrumbSchema(breadcrumbItems)} />
      {article.hasFaq && article.faqItems && article.faqItems.length > 0 && (
        <StructuredData data={faqSchema(article.faqItems)} />
      )}

      <article className="container-content py-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            ...(category ? [{ label: category.name, to: `/${category.slug}` }] : []),
            { label: article.title },
          ]}
        />

        {/* Header */}
        <header className="mb-8 max-w-3xl">
          {category && (
            <Link
              to={`/${category.slug}`}
              className={`badge ${category.color} mb-3 inline-block hover:opacity-80 transition-opacity`}
            >
              {category.icon} {category.name}
            </Link>
          )}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            {author && <span className="font-medium text-gray-700">{author.name}</span>}
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {formatDate(article.publishedDate)}
            </span>
            {article.updatedDate && article.updatedDate !== article.publishedDate && (
              <span className="flex items-center gap-1 text-green-600">
                <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                Updated {formatDate(article.updatedDate)}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {article.readingTime} min read
            </span>
          </div>
        </header>

        {/* Featured Image */}
        {article.featuredImage && (
          <img
            src={article.featuredImage}
            alt={article.featuredImageAlt || article.title}
            className="w-full max-w-3xl rounded-xl border border-gray-200 mb-8"
            loading="eager"
          />
        )}

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="max-w-3xl flex-1 min-w-0">
            {/* TOC */}
            {tocItems.length > 2 && <TableOfContents items={tocItems} />}

            <AdSlot variant="in-article" />

            {/* Article body */}
            <ContentRenderer nodes={article.content} />

            <AdSlot variant="in-article" />

            {/* FAQ Section */}
            {article.hasFaq && article.faqItems && article.faqItems.length > 0 && (
              <FaqSection items={article.faqItems} />
            )}

            {/* Share */}
            <div className="border-t border-gray-100 pt-6 mt-10">
              <ShareButtons title={article.title} url={fullUrl} />
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/search?q=${encodeURIComponent(tag)}`}
                    className="text-xs font-medium text-gray-500 bg-gray-100 hover:bg-brand-50 hover:text-brand-600 px-3 py-1.5 rounded-full transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Prev / Next */}
            <nav aria-label="Previous and next articles" className="grid sm:grid-cols-2 gap-4 mt-10 pt-8 border-t border-gray-100">
              {prevArticle ? (
                <Link
                  to={`/articles/${prevArticle.slug}`}
                  className="flex items-start gap-3 bg-gray-50 hover:bg-brand-50 rounded-xl p-4 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-brand-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Previous</span>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 mt-0.5 line-clamp-2">
                      {prevArticle.title}
                    </p>
                  </div>
                </Link>
              ) : <div />}
              {nextArticle && (
                <Link
                  to={`/articles/${nextArticle.slug}`}
                  className="flex items-start gap-3 bg-gray-50 hover:bg-brand-50 rounded-xl p-4 transition-colors group text-right sm:flex-row-reverse"
                >
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Next</span>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 mt-0.5 line-clamp-2">
                      {nextArticle.title}
                    </p>
                  </div>
                </Link>
              )}
            </nav>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-6">
            <div className="lg:sticky lg:top-24">
              <Newsletter variant="inline" />
              <AdSlot variant="sidebar" className="mt-6" />
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

/* --- FAQ accordion --- */
function FaqSection({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="mt-10 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" id="faq">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <FaqItem key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div className="px-5 py-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
}
