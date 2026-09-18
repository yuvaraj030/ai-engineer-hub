import { Info } from 'lucide-react';

export default function AffiliateDisclosure() {
  return (
    <aside
      role="note"
      aria-label="Affiliate disclosure"
      className="flex gap-3 bg-amber-50 border border-amber-100 rounded-lg px-4 py-3 my-6 text-sm text-amber-800"
    >
      <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" aria-hidden="true" />
      <p>
        <strong>Disclosure:</strong> This article may contain affiliate links. If you purchase
        through an eligible link, we may receive a commission at no additional cost to you. We
        only recommend tools and resources we believe are useful. See our{' '}
        <a href="/disclaimer" className="underline hover:no-underline">
          Disclaimer
        </a>{' '}
        for more details.
      </p>
    </aside>
  );
}
