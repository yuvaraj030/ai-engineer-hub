import { Link } from 'react-router-dom';
import { Clock, Calendar, Tag } from 'lucide-react';
import type { Article } from '../../types';
import { getCategory } from '../../data/categories';
import { formatDateShort } from '../../utils/formatDate';

interface ArticleCardProps {
  article: Article;
  size?: 'default' | 'featured' | 'compact';
}

export default function ArticleCard({ article, size = 'default' }: ArticleCardProps) {
  const category = getCategory(article.category);

  if (size === 'compact') {
    return (
      <Link
        to={`/articles/${article.slug}`}
        className="flex gap-4 group py-3 border-b border-gray-100 last:border-0"
      >
        <div className="flex-1 min-w-0">
          {category && (
            <span className={`badge ${category.color} text-xs mb-1`}>
              {category.name}
            </span>
          )}
          <h3 className="font-semibold text-gray-900 text-sm group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug mt-1">
            {article.title}
          </h3>
          <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" aria-hidden="true" />
              {formatDateShort(article.publishedDate)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />
              {article.readingTime} min read
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (size === 'featured') {
    return (
      <Link
        to={`/articles/${article.slug}`}
        className="card group block"
        aria-label={`Read article: ${article.title}`}
      >
        {/* Featured image */}
        <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
          {article.featuredImage ? (
            <img
              src={article.featuredImage}
              alt={article.featuredImageAlt || article.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <span className="text-4xl" aria-hidden="true">{category?.icon || '📄'}</span>
          )}
        </div>
        <div className="p-6">
          {category && (
            <span className={`badge ${category.color} mb-3 inline-block`}>
              {category.icon} {category.name}
            </span>
          )}
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug">
            {article.title}
          </h2>
          <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">{article.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" aria-hidden="true" />
              {formatDateShort(article.publishedDate)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />
              {article.readingTime} min read
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="card group block"
      aria-label={`Read article: ${article.title}`}
    >
      {/* Image area */}
      <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        {article.featuredImage ? (
          <img
            src={article.featuredImage}
            alt={article.featuredImageAlt || article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-3xl" aria-hidden="true">{category?.icon || '📄'}</span>
        )}
      </div>
      <div className="p-5">
        {category && (
          <span className={`badge ${category.color} mb-2 inline-block`}>
            {category.name}
          </span>
        )}
        <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{article.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" aria-hidden="true" />
            {formatDateShort(article.publishedDate)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" aria-hidden="true" />
            {article.readingTime} min read
          </span>
        </div>
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="flex items-center gap-0.5 text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                <Tag className="w-2.5 h-2.5" aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
