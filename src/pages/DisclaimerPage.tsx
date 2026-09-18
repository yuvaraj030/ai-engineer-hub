import SEOHead from '../components/seo/SEOHead';

export default function DisclaimerPage() {
  return (
    <>
      <SEOHead
        title="Disclaimer — AI Engineer Hub"
        description="Disclaimer for AI Engineer Hub. Important information about educational content, affiliate links, and liability."
        canonical="/disclaimer"
      />

      <div className="container-content py-10">
        <article className="max-w-3xl mx-auto prose-article">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Disclaimer</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: September 2026</p>

          <h2>Educational Information</h2>
          <p>
            The content on AI Engineer Hub is provided for educational and informational purposes only.
            Our articles, tutorials, and guides are intended to help readers learn about AI, Python,
            technology tools, and related topics. The information should not be considered professional
            advice.
          </p>

          <h2>Technology Tutorials</h2>
          <p>
            Technology changes rapidly. While we strive to keep our tutorials accurate and up to date,
            software versions, APIs, and tools may change after publication. We display an "Updated" date
            on articles and recommend checking official documentation for the most current information.
          </p>

          <h2>AI Information</h2>
          <p>
            AI is a fast-moving field. Model capabilities, availability, hardware requirements, and
            best practices evolve regularly. Information presented in our articles reflects our
            understanding at the time of writing and may not reflect the current state of the technology.
          </p>

          <h2>Remote Job Information</h2>
          <p>
            Any information about remote work, job boards, or career opportunities is provided for
            informational purposes only. We do not guarantee the availability, legitimacy, or suitability
            of any specific job listing or platform mentioned on this website. Always conduct your own
            due diligence before applying or sharing personal information with employers or platforms.
          </p>

          <h2>No Guarantee of Earnings or Employment</h2>
          <p>
            This website does not promise or guarantee any specific income, earnings, or employment
            outcomes. Individual results vary based on many factors including skill level, effort,
            experience, market conditions, and other circumstances beyond our control. We do not make
            unrealistic income claims.
          </p>

          <h2>Affiliate Relationships</h2>
          <p>
            Some articles on AI Engineer Hub may contain affiliate links. If you click on an affiliate
            link and make a purchase, we may earn a small commission at no additional cost to you. We
            only include affiliate links for products and services that we believe may be useful to our
            readers. Affiliate relationships do not influence our editorial content or recommendations.
          </p>
          <p>
            When an article contains affiliate links, we include a disclosure at the beginning or end
            of the article.
          </p>

          <h2>Advertisements</h2>
          <p>
            This website may display advertisements from third-party networks. We do not control the
            content of these advertisements and are not responsible for any claims made by advertisers.
            The presence of an advertisement does not constitute an endorsement.
          </p>

          <h2>Third-Party Websites</h2>
          <p>
            Our website contains links to external websites. We are not responsible for the content,
            accuracy, privacy policies, or practices of third-party websites. Visiting external links
            is at your own risk. We encourage you to review the terms and policies of any website you
            visit through our links.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            Nothing on this website constitutes professional legal, financial, medical, or career advice.
            If you need professional advice, consult a qualified professional. Our content is intended
            to be helpful and educational, but it is not a substitute for professional guidance.
          </p>

          <h2>Personal Responsibility</h2>
          <p>
            By using this website, you acknowledge that you are responsible for your own decisions and
            actions. We are not liable for any damages, losses, or consequences resulting from the use
            of information found on this website.
          </p>

          <h2>Accuracy</h2>
          <p>
            We make every effort to ensure the accuracy of the information presented on this website.
            However, we do not guarantee that all information is complete, correct, or up to date. If
            you notice an error, please{' '}
            <a href="/contact" className="text-brand-600 hover:underline">contact us</a> so we can
            correct it.
          </p>

          <h2>Changes to This Disclaimer</h2>
          <p>
            We may update this Disclaimer from time to time. Any changes will be posted on this page
            with an updated revision date.
          </p>
        </article>
      </div>
    </>
  );
}
