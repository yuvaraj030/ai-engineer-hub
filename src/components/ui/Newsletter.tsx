import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

interface NewsletterProps {
  variant?: 'banner' | 'inline';
}

/**
 * Newsletter signup form.
 * Connect to an email provider (Mailchimp, ConvertKit, etc.) by replacing
 * the handleSubmit function with an actual API call.
 *
 * Example with Mailchimp:
 * POST to: https://yourlist.us1.list-manage.com/subscribe/post?...
 */
export default function Newsletter({ variant = 'banner' }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // TODO: Connect to your email provider here
    // Example: await subscribeToMailchimp(email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`flex items-center gap-3 text-green-700 ${variant === 'banner' ? 'py-4' : ''}`}>
        <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        <p className="font-medium">You're subscribed! We'll send tutorials and updates to {email}.</p>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" role="form" aria-label="Newsletter signup">
        <label htmlFor="newsletter-email-inline" className="sr-only">Email address</label>
        <input
          id="newsletter-email-inline"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
        />
        <button type="submit" className="btn-primary whitespace-nowrap">
          <Mail className="w-4 h-4" aria-hidden="true" />
          Subscribe
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    );
  }

  return (
    <section className="bg-brand-700 rounded-2xl px-6 py-10 text-center" aria-labelledby="newsletter-heading">
      <Mail className="w-8 h-8 text-brand-200 mx-auto mb-3" aria-hidden="true" />
      <h2 id="newsletter-heading" className="text-2xl font-bold text-white mb-2">
        Stay Updated
      </h2>
      <p className="text-brand-200 text-sm mb-6 max-w-md mx-auto">
        Get beginner-friendly AI and Python tutorials delivered to your inbox. No spam, unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" role="form" aria-label="Newsletter signup">
        <label htmlFor="newsletter-email-banner" className="sr-only">Email address</label>
        <input
          id="newsletter-email-banner"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="flex-1 px-4 py-2.5 rounded-lg border-0 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="bg-white text-brand-700 hover:bg-brand-50 font-semibold px-5 py-2.5 rounded-lg transition-colors duration-150 whitespace-nowrap text-sm"
        >
          Subscribe Free
        </button>
      </form>
      {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
      <p className="text-xs text-brand-300 mt-3">No spam. Unsubscribe at any time.</p>
    </section>
  );
}
