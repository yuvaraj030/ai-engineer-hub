import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (e.g., Formspree, EmailJS, custom backend)
    // Example: await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: ... })
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact — AI Engineer Hub"
        description="Get in touch with AI Engineer Hub. Send questions, suggestions, corrections, or collaboration inquiries."
        canonical="/contact"
      />

      <div className="container-content py-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-6 h-6 text-brand-600" aria-hidden="true" />
            <h1 className="text-3xl font-extrabold text-gray-900">Contact Us</h1>
          </div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Have a question, suggestion, correction, or collaboration inquiry? We would love to hear from you.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" aria-hidden="true" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Message Received</h2>
              <p className="text-gray-600">
                Thank you for reaching out. We will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message…"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent resize-y"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Send className="w-4 h-4" aria-hidden="true" />
                Send Message
              </button>
              <p className="text-xs text-gray-400 mt-2">
                This form is not connected to an email service yet. To connect it, integrate with
                a service like Formspree, EmailJS, or a custom backend endpoint.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
