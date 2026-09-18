import CodeBlock from './CodeBlock';
import type { ContentNode } from '../../types';
import { slugify } from '../../utils/formatDate';

interface ContentRendererProps {
  nodes: ContentNode[];
}

function renderNode(node: ContentNode, index: number): React.ReactNode {
  switch (node.type) {
    case 'h2': {
      const id = slugify(node.text || '');
      return (
        <h2 key={index} id={id} className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
          {node.text}
        </h2>
      );
    }
    case 'h3': {
      const id = slugify(node.text || '');
      return (
        <h3 key={index} id={id} className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
          {node.text}
        </h3>
      );
    }
    case 'p':
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-5">
          {node.text}
        </p>
      );
    case 'blockquote':
      return (
        <blockquote key={index} className="border-l-4 border-brand-300 bg-brand-50 rounded-r-lg px-5 py-4 my-6 text-gray-700 italic">
          {node.text}
        </blockquote>
      );
    case 'ul':
      return (
        <ul key={index} className="list-disc list-outside space-y-1.5 mb-5 pl-5">
          {node.children?.map((child, i) => (
            <li key={i} className="text-gray-700 leading-relaxed">{child.text}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={index} className="list-decimal list-outside space-y-1.5 mb-5 pl-5">
          {node.children?.map((child, i) => (
            <li key={i} className="text-gray-700 leading-relaxed">{child.text}</li>
          ))}
        </ol>
      );
    case 'pre':
      return (
        <CodeBlock key={index} code={node.text || ''} lang={node.lang} />
      );
    case 'image':
      if (node.src) {
        return (
          <figure key={index} className="my-6">
            <img
              src={node.src}
              alt={node.alt || ''}
              className="rounded-lg border border-gray-200 w-full"
              loading="lazy"
            />
            {node.caption && (
              <figcaption className="text-sm text-gray-500 text-center mt-2 italic">
                {node.caption}
              </figcaption>
            )}
          </figure>
        );
      }
      // Screenshot placeholder
      return (
        <figure key={index} className="my-6">
          <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-32">
            <span className="text-2xl mb-2" aria-hidden="true">🖼️</span>
            <p className="text-sm text-gray-500 font-mono">{node.placeholder}</p>
            {node.caption && (
              <p className="text-xs text-gray-400 mt-2 italic">{node.caption}</p>
            )}
          </div>
          {node.alt && <figcaption className="sr-only">{node.alt}</figcaption>}
        </figure>
      );
    case 'table':
      return (
        <div key={index} className="overflow-x-auto my-6 rounded-lg border border-gray-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50">
                {node.headers?.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {node.rows?.map((row, ri) => (
                <tr key={ri} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'faq':
      // FAQ section is rendered separately by ArticlePage
      return null;
    case 'ad-slot':
      // Ad slots are optional; returning nothing keeps content clean
      return null;
    case 'affiliate-disclosure':
      return null; // Rendered separately at article level
    default:
      return null;
  }
}

export default function ContentRenderer({ nodes }: ContentRendererProps) {
  return (
    <div className="prose-article">
      {nodes.map((node, i) => renderNode(node, i))}
    </div>
  );
}
