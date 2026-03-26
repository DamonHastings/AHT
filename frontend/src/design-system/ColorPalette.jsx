import { colors } from './colors'

/**
 * Color Palette display component for Storybook
 * Shows the design system palette: powder blues, slate blues, sage greens, warm taupes, dark browns.
 */
export function ColorPalette() {
  const colorGroups = [
    { name: 'Powder Blue', colors: colors.powderBlue, description: 'Light, airy backgrounds' },
    { name: 'Slate Blue', colors: colors.slateBlue, description: 'Primary brand color' },
    { name: 'Sage Green', colors: colors.sageGreen, description: 'Accent color for freshness' },
    { name: 'Warm Taupe', colors: colors.warmTaupe, description: 'Secondary, earthy warmth' },
    { name: 'Dark Brown', colors: colors.darkBrown, description: 'Text and strong accents' },
    { name: 'Neutral Gray', colors: colors.gray, description: 'Utility and borders' },
  ]

  return (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="text-3xl font-bold text-wood-300 mb-2">Color Palette</h2>
        <p className="text-neutral-400">
          Based on the warm, cozy therapy room aesthetic. This palette balances earthy neutrals 
          with vibrant, sophisticated colors to create a calming and inviting atmosphere.
        </p>
      </div>

      {colorGroups.map((group) => (
        <div key={group.name} className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold text-wood-300">{group.name}</h3>
            <p className="text-sm text-neutral-400">{group.description}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {Object.entries(group.colors).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div
                  className="w-full h-24 rounded-lg shadow-md border border-neutral-200"
                  style={{ backgroundColor: value }}
                />
                <div className="text-xs">
                  <div className="font-semibold text-wood-300">{key}</div>
                  <div className="text-neutral-400 font-mono">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-wood-300">Site theme (CSS vars)</h3>
        <p className="text-sm text-neutral-400">Used by site marketing layout</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {[
            { name: 'teal', var: '--teal', value: '#5b9ea0' },
            { name: 'teal-deep', var: '--teal-deep', value: '#3e7d80' },
            { name: 'terracotta', var: '--terracotta', value: '#b05a4a' },
            { name: 'navy', var: '--navy', value: '#2c3a4a' },
            { name: 'ink', var: '--ink', value: '#1c2730' },
            { name: 'gold', var: '--gold', value: '#c4973a' },
            { name: 'mauve', var: '--mauve', value: '#7a6e94' },
            { name: 'sand', var: '--sand', value: '#d9c9b0' },
            { name: 'linen', var: '--linen', value: '#f4f0e8' },
            { name: 'warm-white', var: '--warm-white', value: '#fdfbf7' },
            { name: 'mist', var: '--mist', value: '#eff4f4' },
          ].map(({ name, var: v, value }) => (
            <div key={name} className="space-y-2">
              <div
                className="w-full h-20 rounded-lg shadow-md border border-neutral-200"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs">
                <div className="font-semibold text-wood-300">{name}</div>
                <div className="text-neutral-400 font-mono">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-wood-300">Semantic Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.entries(colors.semantic).map(([name, value]) => (
            <div key={name} className="space-y-2">
              <div
                className="w-full h-24 rounded-lg shadow-md border border-neutral-200"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs">
                <div className="font-semibold text-wood-300 capitalize">{name}</div>
                <div className="text-neutral-400 font-mono">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorPalette
