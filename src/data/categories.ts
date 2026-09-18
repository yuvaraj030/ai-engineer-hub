import type { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'ai',
    name: 'AI',
    slug: 'ai',
    description: 'Artificial intelligence concepts, tools, trends, and beginner-friendly guides.',
    icon: '🤖',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    id: 'python',
    name: 'Python',
    slug: 'python',
    description: 'Learn Python programming from the ground up — syntax, libraries, and projects.',
    icon: '🐍',
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'ai-tools',
    name: 'AI Tools',
    slug: 'ai-tools',
    description: 'Reviews and guides for AI tools that help you work smarter and build faster.',
    icon: '🛠️',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'local-ai',
    name: 'Local AI',
    slug: 'local-ai',
    description: 'Run powerful AI models on your own hardware — private, offline, and free.',
    icon: '💻',
    color: 'bg-green-100 text-green-700',
  },
  {
    id: 'ollama',
    name: 'Ollama',
    slug: 'ollama',
    description: 'Everything about Ollama — installation, models, Python integration, and more.',
    icon: '🦙',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    id: 'remote-jobs',
    name: 'Remote Jobs',
    slug: 'remote-jobs',
    description: 'Legitimate remote work resources, job boards, and career tips for tech professionals.',
    icon: '🌍',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    id: 'tutorials',
    name: 'Tutorials',
    slug: 'tutorials',
    description: 'Step-by-step tutorials covering AI, Python, tools, and developer skills.',
    icon: '📚',
    color: 'bg-indigo-100 text-indigo-700',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
