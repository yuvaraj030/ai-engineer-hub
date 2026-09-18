import SEOHead from '../components/seo/SEOHead';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy — AI Engineer Hub"
        description="Privacy Policy for AI Engineer Hub. Learn how we handle your information, cookies, and data."
        canonical="/privacy-policy"
      />

      <div className="container-content py-10">
        <article className="max-w-3xl mx-auto prose-article">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: September 2026</p>

          <p>
            AI Engineer Hub ("we," "us," or "our") operates the website aiengineer.hub. This Privacy Policy
            explains how we collect, use, and protect information when you visit our website.
          </p>

          <h2>Information You Voluntarily Provide</h2>
          <p>
            We may collect information you voluntarily provide, such as your name and email address,
            when you subscribe to our newsletter or use the contact form. We only use this information
            to respond to your inquiry or deliver the content you requested.
          </p>

          <h2>Technical Information</h2>
          <p>
            When you visit our website, our hosting provider may automatically collect certain technical
            information, including your IP address, browser type, operating system, referring URLs,
            pages visited, and timestamps. This information is used for security and performance purposes.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies — small text files stored on your device — to improve your
            experience. You can control cookies through your browser settings. Disabling cookies may
            affect certain features of the website.
          </p>

          <h2>Analytics</h2>
          <p>
            We may use analytics services in the future (such as Google Analytics) to understand how
            visitors interact with our website. If and when analytics are enabled, the analytics provider
            may collect anonymized usage data. We will update this policy accordingly.
          </p>
          <p>
            <em>
              Note: As of the date of this policy, no analytics services are actively configured on this website.
            </em>
          </p>

          <h2>Advertising</h2>
          <p>
            We may display advertisements on this website in the future (such as through Google AdSense).
            Advertising networks may use cookies or similar technologies to serve ads based on your
            browsing activity. We will update this policy when advertising services are activated.
          </p>
          <p>
            <em>
              Note: As of the date of this policy, no advertising services are actively configured on this website.
            </em>
          </p>

          <h2>Affiliate Links</h2>
          <p>
            Some articles may contain affiliate links. When you click an affiliate link and make a purchase,
            we may earn a commission at no additional cost to you. Affiliate partners may use cookies to
            track referrals. We clearly disclose affiliate relationships in articles that contain such links.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices or content of these external websites. We encourage you to review the privacy policies
            of any third-party websites you visit.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect any information you provide. However, no method of
            transmission over the internet or electronic storage is completely secure. We cannot guarantee
            absolute security.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            This website is not directed at children under the age of 13. We do not knowingly collect
            personal information from children. If you believe a child has provided us with personal
            information, please contact us and we will delete it promptly.
          </p>

          <h2>Policy Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the "Last
            updated" date at the top of this page. We encourage you to review this policy periodically.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us through our{' '}
            <a href="/contact" className="text-brand-600 hover:underline">Contact page</a>.
          </p>
        </article>
      </div>
    </>
  );
}
