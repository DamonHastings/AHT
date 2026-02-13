/**
 * Design System Introduction
 * 
 * Welcome to the Design System for the Therapy Practice website.
 * This design system is based on a warm, cozy therapy room aesthetic,
 * balancing earthy neutrals with vibrant, sophisticated colors.
 */

export default {
  title: 'Design System/Introduction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Welcome to the Design System for the Therapy Practice website. This design system is based on a warm, cozy therapy room aesthetic, balancing earthy neutrals with vibrant, sophisticated colors to create a calming and inviting atmosphere.',
      },
    },
  },
}

export const Overview = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-5xl font-bold text-wood-300 mb-4">Design System</h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          Welcome to the Design System for the Therapy Practice website. This design system is 
          based on a warm, cozy therapy room aesthetic, balancing earthy neutrals with vibrant, 
          sophisticated colors to create a calming and inviting atmosphere.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-wood-300">Color Palette</h2>
        <p className="text-lg text-wood-300">
          Our color palette is inspired by a thoughtfully designed therapy room featuring:
        </p>
        <ul className="list-disc list-inside space-y-2 text-wood-300 ml-4">
          <li><strong>Warm Neutrals</strong> - Creamy off-whites and beiges for backgrounds and base colors</li>
          <li><strong>Wood Tones</strong> - Rich browns and siennas for natural elements and furniture</li>
          <li><strong>Primary Rust</strong> (#A52A2A) - Inspired by a comfortable armchair, our main brand color</li>
          <li><strong>Secondary Teal</strong> (#008080) - Inspired by a plush sofa, our secondary brand color</li>
          <li><strong>Accent Colors</strong> - Navy, coral, burgundy, and gold for highlights and emphasis</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-wood-300">Components</h2>
        <p className="text-lg text-wood-300">
          Our component library includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-wood-300 ml-4">
          <li><strong>Button</strong> - Multiple variants and sizes for all interactive actions</li>
          <li><strong>Typography</strong> - Consistent heading and text styles</li>
          <li><strong>Card</strong> - Flexible content containers</li>
          <li><strong>Badge</strong> - Labels and status indicators</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-wood-300">Getting Started</h2>
        <p className="text-lg text-wood-300">
          Browse the component stories in the sidebar to explore:
        </p>
        <ul className="list-disc list-inside space-y-2 text-wood-300 ml-4">
          <li>All available variants</li>
          <li>Size options</li>
          <li>Usage examples</li>
          <li>Interactive controls</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-wood-300">Design Principles</h2>
        <ol className="list-decimal list-inside space-y-2 text-wood-300 ml-4">
          <li><strong>Warmth & Comfort</strong> - Every element should feel welcoming and calming</li>
          <li><strong>Accessibility</strong> - All components meet WCAG AA standards</li>
          <li><strong>Consistency</strong> - Unified design language across the application</li>
          <li><strong>Flexibility</strong> - Components support multiple use cases</li>
        </ol>
      </section>

      <section className="space-y-4 bg-neutral-50 p-6 rounded-lg border border-neutral-200">
        <h2 className="text-3xl font-bold text-wood-300">Usage</h2>
        <p className="text-lg text-wood-300 mb-4">
          Import components from the design system:
        </p>
        <div className="bg-wood-300 text-white p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono whitespace-pre">
{`import { Button, Card, Badge, Heading, Text } from './design-system'

function MyComponent() {
  return (
    <Card>
      <Heading level={2}>Welcome</Heading>
      <Text>This is a card with typography.</Text>
      <Button variant="primary">Get Started</Button>
    </Card>
  )
}`}
          </pre>
        </div>
      </section>
    </div>
  ),
}
