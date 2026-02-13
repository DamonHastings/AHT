import { useState } from 'react'
import PropTypes from 'prop-types'
import { colors } from './colors'

/**
 * Color Palette Builder - Interactive color system viewer
 * Features: Color swatches, extended variants, accessibility checker, and CSS export
 */

// Utility functions
function hexToRgb(hex) {
  if (!hex) return null
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
}

function generateTints(hex, steps = 5) {
  const rgb = hexToRgb(hex)
  if (!rgb) return []
  
  const tints = []
  for (let i = 0; i <= steps; i++) {
    const factor = i / steps
    const r = Math.round(rgb.r + (255 - rgb.r) * factor)
    const g = Math.round(rgb.g + (255 - rgb.g) * factor)
    const b = Math.round(rgb.b + (255 - rgb.b) * factor)
    tints.push(rgbToHex(r, g, b))
  }
  return tints.reverse()
}

function generateShades(hex, steps = 5) {
  const rgb = hexToRgb(hex)
  if (!rgb) return []
  
  const shades = []
  for (let i = 0; i <= steps; i++) {
    const factor = i / steps
    const r = Math.round(rgb.r * (1 - factor))
    const g = Math.round(rgb.g * (1 - factor))
    const b = Math.round(rgb.b * (1 - factor))
    shades.push(rgbToHex(r, g, b))
  }
  return shades
}

function getLuminance(hex) {
  const rgb = hexToRgb(hex)
  if (!rgb) return 0
  
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val /= 255
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function getContrastRatio(hex1, hex2) {
  const lum1 = getLuminance(hex1)
  const lum2 = getLuminance(hex2)
  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)
  return (lighter + 0.05) / (darker + 0.05)
}

// Components
function ColorCard({ color, onClick }) {
  const handleClick = () => {
    if (onClick && color?.hex) {
      onClick(color.hex)
    }
  }

  if (!color) return null

  return (
    <div 
      className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div 
        className="h-32 relative"
        style={{ backgroundColor: color.hex || '#cccccc' }}
      />
      <div className="p-4 bg-gray-50">
        <div className="font-semibold text-gray-900 mb-1">{color.name || 'Unnamed'}</div>
        <div 
          className="font-mono text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            handleClick()
          }}
        >
          {color.hex || '#000000'}
        </div>
        <span className="inline-block mt-2 px-2 py-1 bg-blue-500 text-white rounded text-xs font-medium">
          {color.role || 'Color'}
        </span>
      </div>
    </div>
  )
}

ColorCard.propTypes = {
  color: PropTypes.shape({
    hex: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

function ShadeItem({ shade, label, onClick }) {
  const handleClick = () => {
    if (onClick && shade) {
      onClick(shade)
    }
  }

  return (
    <div className="text-center">
      <div 
        className="h-16 rounded-md mb-2 cursor-pointer border border-gray-200 transition-all hover:shadow-md"
        style={{ backgroundColor: shade || '#cccccc' }}
        onClick={handleClick}
      />
      <div className="text-xs text-gray-600">{label || ''}</div>
      <div 
        className="font-mono text-xs text-gray-400 cursor-pointer hover:text-blue-600"
        onClick={handleClick}
      >
        {shade || ''}
      </div>
    </div>
  )
}

ShadeItem.propTypes = {
  shade: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

function ContrastCard({ bgColor, textColor, label }) {
  const ratio = getContrastRatio(bgColor, textColor)
  const passAA = ratio >= 4.5
  const passAAA = ratio >= 7

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div 
        className="p-6 rounded-md mb-2 font-semibold"
        style={{ backgroundColor: bgColor || '#fff', color: textColor || '#000' }}
      >
        The quick brown fox jumps
      </div>
      <div className="text-sm text-gray-600 mb-2">{label || ''}</div>
      <div className="flex justify-between items-center">
        <span className={`font-mono font-semibold ${passAA ? 'text-green-600' : 'text-red-600'}`}>
          {ratio.toFixed(2)}:1
        </span>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded text-xs font-semibold ${
            passAA ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            AA {passAA ? '✓' : '✗'}
          </span>
          <span className={`px-2 py-1 rounded text-xs font-semibold ${
            passAAA ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            AAA {passAAA ? '✓' : '✗'}
          </span>
        </div>
      </div>
    </div>
  )
}

ContrastCard.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export function ColorPaletteBuilder() {
  const [toast, setToast] = useState(false)
  const [copyButtonText, setCopyButtonText] = useState('Copy CSS')

  const originalColors = [
    { hex: colors.powderBlue[300], name: 'Powder Blue', role: 'Background/Light' },
    { hex: colors.slateBlue[300], name: 'Slate Blue', role: 'Primary' },
    { hex: colors.sageGreen[300], name: 'Sage Green', role: 'Accent' },
    { hex: colors.warmTaupe[300], name: 'Warm Taupe', role: 'Secondary' },
    { hex: colors.darkBrown[300], name: 'Dark Brown', role: 'Text/Dark' }
  ]

  const recommendations = [
    { text: 'Use ', color: colors.powderBlue[300], suffix: ' as your main background color - it\'s soft and clean' },
    { text: 'Use ', color: colors.slateBlue[300], suffix: ' for primary buttons and key UI elements' },
    { text: 'Use ', color: colors.darkBrown[300], suffix: ' for headings and body text (excellent contrast)' },
    { text: 'Use ', color: colors.sageGreen[300], suffix: ' sparingly as an accent for highlights or success states' },
    { text: 'Consider adding pure white (#FFFFFF) for card backgrounds over the light background', color: null, suffix: '' },
    { text: 'The dark brown is quite heavy - use lighter variants (100-200) for secondary text', color: null, suffix: '' }
  ]

  const contrastPairs = [
    { bg: colors.powderBlue[300], text: colors.darkBrown[300], label: 'Light bg + Dark text' },
    { bg: colors.powderBlue[300], text: colors.slateBlue[300], label: 'Light bg + Primary' },
    { bg: colors.slateBlue[300], text: '#FFFFFF', label: 'Primary + White text' },
    { bg: colors.slateBlue[300], text: colors.powderBlue[300], label: 'Primary + Light text' },
    { bg: colors.darkBrown[300], text: '#FFFFFF', label: 'Dark bg + White text' },
    { bg: colors.darkBrown[300], text: colors.sageGreen[300], label: 'Dark bg + Accent' },
    { bg: '#FFFFFF', text: colors.darkBrown[300], label: 'White bg + Dark text' },
    { bg: '#FFFFFF', text: colors.slateBlue[300], label: 'White bg + Primary' }
  ]

  const copyToClipboard = (text) => {
    if (!text) return
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setToast(true)
        setTimeout(() => setToast(false), 2000)
      }).catch((err) => {
        console.error('Failed to copy:', err)
      })
    }
  }

  const generateCSS = () => {
    let css = `:root {
  /* Original Colors */
  --color-background-light: ${colors.powderBlue[300]};
  --color-primary: ${colors.slateBlue[300]};
  --color-accent: ${colors.sageGreen[300]};
  --color-secondary: ${colors.warmTaupe[300]};
  --color-text-dark: ${colors.darkBrown[300]};
  
  /* Extended Palette */`

    originalColors.forEach(color => {
      const name = color.name.toLowerCase().replace(/\s+/g, '-')
      const allShades = [
        ...generateTints(color.hex, 3).slice(0, -1),
        color.hex,
        ...generateShades(color.hex, 3).slice(1)
      ]
      const labels = ['50', '100', '200', '300', '400', '500', '600']
      
      css += `\n  /* ${color.name} */\n`
      allShades.forEach((shade, i) => {
        css += `  --color-${name}-${labels[i]}: ${shade};\n`
      })
    })

    css += `\n  /* Semantic Colors */
  --color-success: ${colors.semantic.success};
  --color-warning: ${colors.semantic.warning};
  --color-error: ${colors.semantic.error};
  --color-info: ${colors.semantic.info};
  
  /* Neutral Grays */
  --color-white: ${colors.semantic.white};
  --color-gray-50: ${colors.gray[50]};
  --color-gray-100: ${colors.gray[100]};
  --color-gray-200: ${colors.gray[200]};
  --color-gray-300: ${colors.gray[300]};
  --color-gray-500: ${colors.gray[500]};
  --color-gray-700: ${colors.gray[700]};
  --color-gray-900: ${colors.gray[900]};
  --color-black: ${colors.semantic.black};
}`

    return css
  }

  const handleCopyCSS = () => {
    const css = generateCSS()
    copyToClipboard(css)
    setCopyButtonText('Copied!')
    setTimeout(() => setCopyButtonText('Copy CSS'), 2000)
  }

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Website Color Palette</h1>
        <p className="text-gray-600">Complete design system built from your extracted colors</p>
      </div>

      {/* Original Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
          Original Colors + Suggested Roles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {originalColors.map((color, idx) => (
            <ColorCard key={idx} color={color} onClick={copyToClipboard} />
          ))}
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <h3 className="text-yellow-800 font-semibold mb-2 flex items-center gap-2">
            <span>💡</span> Recommendations
          </h3>
          <ul className="list-disc ml-6 text-yellow-900 space-y-1">
            {recommendations.map((rec, idx) => (
              <li key={idx}>
                {rec.text}
                {rec.color && <strong className="font-mono">{rec.color}</strong>}
                {rec.suffix}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Extended Palette */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
          Extended Color Variants
        </h2>
        <p className="text-gray-600 mb-6">Tints and shades for each color (click any to copy)</p>
        
        {originalColors.map((color, idx) => {
          const allShades = [
            ...generateTints(color.hex, 3).slice(0, -1),
            color.hex,
            ...generateShades(color.hex, 3).slice(1)
          ]
          const labels = ['50', '100', '200', '300', '400', '500', '600']
          
          return (
            <div key={idx} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">{color.name}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                {allShades.map((shade, i) => (
                  <ShadeItem key={i} shade={shade} label={labels[i]} onClick={copyToClipboard} />
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* Accessibility Checker */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
          Accessibility Checker
        </h2>
        <p className="text-gray-600 mb-6">Text contrast ratios (WCAG 2.1 standards)</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {contrastPairs.map((pair, idx) => (
            <ContrastCard key={idx} {...pair} />
          ))}
        </div>
      </section>

      {/* Export */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
          Export Your Palette
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-2">CSS Variables (ready to use)</p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto font-mono text-sm whitespace-pre">
            {generateCSS()}
          </div>
          <button 
            onClick={handleCopyCSS}
            className={`mt-3 px-6 py-2 rounded-md font-medium transition-colors ${
              copyButtonText === 'Copied!' 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {copyButtonText}
          </button>
        </div>
      </section>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-8 right-8 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl transition-opacity">
          Copied to clipboard!
        </div>
      )}
    </div>
  )
}

export default ColorPaletteBuilder
