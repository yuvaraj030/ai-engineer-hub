import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
  level: 'h2' | 'h3';
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8"
    >
      <div className="flex items-center gap-2 mb-3">
        <List className="w-4 h-4 text-gray-500" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Table of Contents
        </h2>
      </div>
      <ol className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 'h3' ? 'ml-4' : ''}
          >
            <a
              href={`#${item.id}`}
              className={`text-sm transition-colors duration-150 ${
                activeId === item.id
                  ? 'text-brand-600 font-medium'
                  : 'text-gray-600 hover:text-brand-600'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export type { TocItem };
