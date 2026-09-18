import { Twitter, Linkedin, Link2, Facebook } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback — do nothing
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm font-medium text-gray-500 mr-1">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter / X"
        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-sky-500 border border-gray-200 hover:border-sky-200 px-3 py-1.5 rounded-lg transition-colors"
      >
        <Twitter className="w-3.5 h-3.5" aria-hidden="true" />
        Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-200 px-3 py-1.5 rounded-lg transition-colors"
      >
        <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
        LinkedIn
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-500 border border-gray-200 hover:border-blue-200 px-3 py-1.5 rounded-lg transition-colors"
      >
        <Facebook className="w-3.5 h-3.5" aria-hidden="true" />
        Facebook
      </a>
      <button
        onClick={handleCopyLink}
        aria-label="Copy link to clipboard"
        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-brand-600 border border-gray-200 hover:border-brand-200 px-3 py-1.5 rounded-lg transition-colors"
      >
        <Link2 className="w-3.5 h-3.5" aria-hidden="true" />
        {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  );
}
