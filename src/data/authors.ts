import type { Author } from '../types';

export const authors: Author[] = [
  {
    id: 'ai-engineer-hub',
    name: 'AI Engineer Hub',
    bio: 'Practical tutorials on AI, Python, local AI, and career development for developers and learners.',
    twitter: 'https://twitter.com/aiengineerh',
    github: 'https://github.com/aiengineerh',
  },
];

export function getAuthor(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}
