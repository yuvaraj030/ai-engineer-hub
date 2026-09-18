interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI Engineer Hub',
    url: 'https://ai-engineer-hub-tau.vercel.app',
    description: 'Practical beginner-friendly tutorials on AI, Python, local AI, Ollama, AI tools and remote work.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ai-engineer-hub-tau.vercel.app/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI Engineer Hub',
    url: 'https://ai-engineer-hub-tau.vercel.app',
    logo: 'https://ai-engineer-hub-tau.vercel.app/favicon.svg',
    sameAs: [
      'https://twitter.com/aiengineerh',
      'https://github.com/aiengineerh',
    ],
  };
}

export function articleSchema({
  title,
  description,
  slug,
  publishedDate,
  updatedDate,
  authorName,
  imageUrl,
}: {
  title: string;
  description: string;
  slug: string;
  publishedDate: string;
  updatedDate?: string;
  authorName: string;
  imageUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://ai-engineer-hub-tau.vercel.app/articles/${slug}`,
    datePublished: publishedDate,
    dateModified: updatedDate || publishedDate,
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Engineer Hub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ai-engineer-hub-tau.vercel.app/favicon.svg',
      },
    },
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
      },
    }),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
