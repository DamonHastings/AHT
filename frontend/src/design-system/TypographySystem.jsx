import { typography, typographyUsage } from "./typography";
import { Heading, Text } from "./Typography.jsx";

/**
 * Typography System Documentation
 * Showcases the Crimson Text + Nunito Sans pairing
 */
export function TypographySystem() {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="mb-12 pb-8 border-b-2 border-gray-200">
        <h1 className="font-heading text-6xl font-bold text-gray-900 mb-4">Typography System</h1>
        <p className="font-body text-xl text-gray-600 leading-relaxed max-w-3xl">
          Our typography uses <strong>Crimson Text</strong> for headings (serif) and{" "}
          <strong>Nunito Sans</strong> for body text (sans-serif). This pairing creates a classic
          yet compassionate feel that's perfect for a therapy practice.
        </p>
      </div>

      {/* Font Pairing Overview */}
      <section className="mb-16">
        <h2 className="font-heading text-4xl font-semibold text-gray-900 mb-6">
          Font Pairing: Classic & Compassionate
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
            <h3 className="font-heading text-3xl font-semibold mb-4" style={{ color: "#65858C" }}>
              Crimson Text
            </h3>
            <p className="font-body text-gray-700 mb-4 leading-relaxed">
              A classic serif typeface for headings that conveys authority without intimidation.
            </p>
            <div className="space-y-2 text-sm font-body text-gray-600">
              <div>
                <strong>Use for:</strong> H1-H6, hero headlines, section titles
              </div>
              <div>
                <strong>Weights:</strong> 400 (regular), 600 (semibold), 700 (bold)
              </div>
              <div>
                <strong>Feel:</strong> Traditional, warm, established
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <div className="font-heading text-4xl">AaBbCc123</div>
              <div className="font-heading text-sm text-gray-500 mt-2">
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
            <h3 className="font-heading text-3xl font-semibold mb-4" style={{ color: "#C2D9A0" }}>
              Nunito Sans
            </h3>
            <p className="font-body text-gray-700 mb-4 leading-relaxed">
              A warm sans-serif with rounded terminals for body text that feels nurturing and
              accessible.
            </p>
            <div className="space-y-2 text-sm font-body text-gray-600">
              <div>
                <strong>Use for:</strong> Body text, captions, UI elements, buttons
              </div>
              <div>
                <strong>Weights:</strong> 300 (light), 400 (regular), 600 (semibold)
              </div>
              <div>
                <strong>Feel:</strong> Gentle, modern, approachable
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <div className="font-body text-4xl">AaBbCc123</div>
              <div className="font-body text-sm text-gray-500 mt-2">
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heading Scale */}
      <section className="mb-16">
        <h2 className="font-heading text-4xl font-semibold text-gray-900 mb-8">Heading Scale</h2>
        <div className="space-y-8">
          <div className="pb-6 border-b border-gray-200">
            <Heading level={1}>Heading 1 - Hero Headlines</Heading>
            <p className="font-body text-sm text-gray-500 mt-2">
              48px-60px • Crimson Text Semibold • Line height: 1.2
            </p>
          </div>
          <div className="pb-6 border-b border-gray-200">
            <Heading level={2}>Heading 2 - Section Titles</Heading>
            <p className="font-body text-sm text-gray-500 mt-2">
              40px-48px • Crimson Text Semibold • Line height: 1.3
            </p>
          </div>
          <div className="pb-6 border-b border-gray-200">
            <Heading level={3}>Heading 3 - Subsection Titles</Heading>
            <p className="font-body text-sm text-gray-500 mt-2">
              32px-40px • Crimson Text Semibold • Line height: 1.3
            </p>
          </div>
          <div className="pb-6 border-b border-gray-200">
            <Heading level={4}>Heading 4 - Card Titles</Heading>
            <p className="font-body text-sm text-gray-500 mt-2">
              24px-32px • Crimson Text Semibold • Line height: 1.3
            </p>
          </div>
          <div className="pb-6 border-b border-gray-200">
            <Heading level={5}>Heading 5 - Small Headings</Heading>
            <p className="font-body text-sm text-gray-500 mt-2">
              20px-24px • Crimson Text Semibold • Line height: 1.5
            </p>
          </div>
          <div className="pb-6 border-b border-gray-200">
            <Heading level={6}>Heading 6 - Labels</Heading>
            <p className="font-body text-sm text-gray-500 mt-2">
              18px-20px • Crimson Text Semibold • Line height: 1.5
            </p>
          </div>
        </div>
      </section>

      {/* Body Text Scale */}
      <section className="mb-16">
        <h2 className="font-heading text-4xl font-semibold text-gray-900 mb-8">Body Text Scale</h2>
        <div className="space-y-8">
          <div className="pb-6 border-b border-gray-200">
            <Text variant="lead">
              Lead Text - Used for introductory paragraphs and important statements that need extra
              emphasis. Slightly larger and more spacious than regular body text.
            </Text>
            <p className="font-body text-sm text-gray-500 mt-2">
              20px-24px • Nunito Sans Regular • Line height: 1.6
            </p>
          </div>
          <div className="pb-6 border-b border-gray-200">
            <Text variant="large">
              Large Body Text - For sections that need better readability or when you want to create
              hierarchy within body content without using headings.
            </Text>
            <p className="font-body text-sm text-gray-500 mt-2">
              18px • Nunito Sans Regular • Line height: 1.6
            </p>
          </div>
          <div className="pb-6 border-b border-gray-200">
            <Text variant="body">
              Regular Body Text - The default text size for most content. This is what you'll use
              for paragraphs, lists, and general content throughout the website. It strikes the
              perfect balance between readability and space efficiency.
            </Text>
            <p className="font-body text-sm text-gray-500 mt-2">
              16px • Nunito Sans Regular • Line height: 1.6
            </p>
          </div>
          <div className="pb-6 border-b border-gray-200">
            <Text variant="small">
              Small Text - Used for secondary information, captions, footnotes, and metadata. Still
              readable but takes up less visual space.
            </Text>
            <p className="font-body text-sm text-gray-500 mt-2">
              14px • Nunito Sans Regular • Line height: 1.6
            </p>
          </div>
          <div className="pb-6 border-b border-gray-200">
            <Text variant="muted">
              Muted Text - For less important information, hints, or disabled states. Uses a lighter
              color to reduce visual prominence.
            </Text>
            <p className="font-body text-sm text-gray-500 mt-2">
              14px • Nunito Sans Regular • Light color • Line height: 1.6
            </p>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="font-heading text-4xl font-semibold text-gray-900 mb-8">Usage in Context</h2>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h3 className="font-heading text-3xl font-semibold mb-4" style={{ color: "#3F1006" }}>
            Sample Article Section
          </h3>
          <Text variant="lead" className="mb-6">
            This is a lead paragraph that introduces the topic and draws readers in with slightly
            larger, more prominent text that commands attention without overwhelming.
          </Text>
          <Text variant="body" className="mb-4">
            Regular paragraphs follow with comfortable 16px text and generous line height of 1.6 for
            optimal reading. The Nunito Sans font's rounded characters create a warm, approachable
            feel that's perfect for therapy content.
          </Text>
          <Text variant="body" className="mb-4">
            Multiple paragraphs flow naturally together, maintaining readability and creating a
            pleasant reading experience. The combination of Crimson Text headings and Nunito Sans
            body text creates clear hierarchy.
          </Text>
          <Text variant="small" className="text-gray-600">
            Source: Typography Best Practices Guide, 2024
          </Text>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-16">
        <h2 className="font-heading text-4xl font-semibold text-gray-900 mb-8">Quick Reference</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
          <h3 className="font-heading text-2xl font-semibold mb-4 text-blue-900">
            CSS Implementation
          </h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
            {`/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: "Crimson Text", serif;
  font-weight: 600;
  line-height: 1.2;
}

/* Body Text */
body, p, li {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

/* Tailwind Classes */
<h1 className="font-heading text-6xl font-semibold">
<p className="font-body text-base leading-relaxed">`}
          </pre>
        </div>
      </section>
    </div>
  );
}

export default TypographySystem;
