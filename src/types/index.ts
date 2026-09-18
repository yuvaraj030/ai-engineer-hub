export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
  twitter?: string;
  github?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export interface ContentNode {
  type:
    | 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'li'
    | 'code' | 'pre' | 'blockquote' | 'image'
    | 'table' | 'thead' | 'tbody' | 'tr' | 'th' | 'td'
    | 'faq' | 'faq-item' | 'affiliate-disclosure' | 'ad-slot';
  children?: ContentNode[];
  text?: string;
  lang?: string;        // for code blocks
  src?: string;         // for images
  alt?: string;         // for images
  caption?: string;     // for images
  placeholder?: string; // for screenshot placeholders
  question?: string;    // for faq-item
  answer?: string;      // for faq-item
  variant?: 'in-article' | 'sidebar' | 'footer'; // for ad-slot
  headers?: string[];   // for tables
  rows?: string[][];    // for tables
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentNode[];
  category: string;       // category slug
  tags: string[];
  author: string;         // author id
  publishedDate: string;  // ISO 8601
  updatedDate?: string;   // ISO 8601
  featuredImage?: string;
  featuredImageAlt?: string;
  readingTime: number;    // minutes
  seoTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  featured?: boolean;
  hasFaq?: boolean;
  faqItems?: { question: string; answer: string }[];
}
