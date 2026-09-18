interface AdSlotProps {
  variant?: 'in-article' | 'sidebar' | 'footer';
  className?: string;
}

/**
 * AdSlot — placeholder for Google AdSense.
 * Replace the inner content with your AdSense <ins> tag when ready.
 *
 * Example AdSense code (do not activate until approved):
 * <ins class="adsbygoogle" ...></ins>
 * <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
 */
export default function AdSlot({ variant = 'in-article', className = '' }: AdSlotProps) {
  const sizes = {
    'in-article': 'h-24 md:h-28',
    sidebar: 'h-60',
    footer: 'h-20',
  };

  return (
    <div
      className={`bg-gray-50 border border-dashed border-gray-200 rounded-lg flex items-center justify-center my-6 ${sizes[variant]} ${className}`}
      aria-label="Advertisement placeholder"
      role="complementary"
    >
      <p className="text-xs text-gray-300 select-none">
        Advertisement
      </p>
    </div>
  );
}
