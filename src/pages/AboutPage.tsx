import { BookOpen, Target, Users } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About — AI Engineer Hub"
        description="AI Engineer Hub provides beginner-friendly educational content about AI, Python, AI tools, local AI, Ollama, remote work, and AI careers."
        canonical="/about"
      />

      <div className="container-content py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">About AI Engineer Hub</h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            AI Engineer Hub is an educational website that provides beginner-friendly content about
            artificial intelligence, Python programming, AI tools, local AI, Ollama, remote work
            opportunities, and AI career development.
          </p>

          {/* Mission */}
          <div className="bg-brand-50 border border-brand-100 rounded-xl p-6 mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-brand-600" aria-hidden="true" />
              <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Make technology easier to understand and easier to learn.
            </p>
          </div>

          {/* What we cover */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Cover</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: '🤖', title: 'Artificial Intelligence', desc: 'AI concepts, trends, and practical applications explained clearly.' },
              { icon: '🐍', title: 'Python Programming', desc: 'Python tutorials from beginner basics to practical project building.' },
              { icon: '🛠️', title: 'AI Tools', desc: 'Reviews, guides, and walkthroughs of useful AI tools and platforms.' },
              { icon: '💻', title: 'Local AI', desc: 'Running AI models on your own computer — private, free, and offline.' },
              { icon: '🦙', title: 'Ollama', desc: 'Installation guides, model comparisons, and Python integration tutorials.' },
              { icon: '🌍', title: 'Remote Work & Careers', desc: 'Legitimate remote work resources and AI career development guidance.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" aria-hidden="true">{item.icon}</span>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Who this is for */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-brand-600" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900">Who This Is For</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              {[
                'Beginners who are new to programming or AI.',
                'Students studying computer science or related fields.',
                'People learning Python for the first time.',
                'Aspiring AI engineers looking for practical guidance.',
                'Developers who want to understand and integrate AI into their work.',
                'Anyone interested in legitimate remote work opportunities.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Approach */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-brand-600" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900">Our Approach</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              We believe in providing useful, accurate, and honest educational content. Our articles
              are written to be practical and easy to follow, with step-by-step instructions and
              real code examples.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not fabricate personal experiences, inflate statistics, or make unrealistic claims.
              When information changes frequently, we update our articles and clearly display the
              last-updated date.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <p className="text-gray-700 mb-3">
              Have questions, suggestions, or want to collaborate?
            </p>
            <a href="/contact" className="btn-primary inline-flex">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
