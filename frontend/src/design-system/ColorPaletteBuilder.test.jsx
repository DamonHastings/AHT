import { colors } from './colors'

/**
 * Diagnostic component to test color palette structure
 */
export function ColorPaletteTest() {
  // Test data structure
  const testColors = [
    { hex: colors.powderBlue?.[300] || '#E4EDF2', name: 'Powder Blue', role: 'Background' },
    { hex: colors.slateBlue?.[300] || '#65858C', name: 'Slate Blue', role: 'Primary' },
    { hex: colors.sageGreen?.[300] || '#C2D9A0', name: 'Sage Green', role: 'Accent' },
  ]

  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl font-bold mb-4">Color Palette Test</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Color Structure Check</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify({
            powderBlue300: colors.powderBlue?.[300],
            slateBlue300: colors.slateBlue?.[300],
            sageGreen300: colors.sageGreen?.[300],
            warmTaupe300: colors.warmTaupe?.[300],
            darkBrown300: colors.darkBrown?.[300],
          }, null, 2)}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Basic Color Cards</h2>
        <div className="grid grid-cols-3 gap-4">
          {testColors.map((color, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="h-24"
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-3 bg-gray-50">
                <div className="font-semibold">{color.name}</div>
                <div className="text-sm font-mono text-gray-600">{color.hex}</div>
                <div className="text-xs text-gray-500">{color.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Clipboard Test</h2>
        <button
          onClick={() => {
            const text = colors.powderBlue?.[300] || 'test'
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(text)
                .then(() => alert('Copied: ' + text))
                .catch((err) => alert('Error: ' + err.message))
            } else {
              alert('Clipboard API not available')
            }
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Test Clipboard
        </button>
      </section>
    </div>
  )
}

export default ColorPaletteTest
