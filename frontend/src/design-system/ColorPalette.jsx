import { colors } from './colors'

/**
 * Color Palette display component for Storybook
 */
export function ColorPalette() {
  const colorGroups = [
    { name: 'Neutrals', colors: colors.neutral, description: 'Walls, ceiling, base colors' },
    { name: 'Wood Tones', colors: colors.wood, description: 'Floor, furniture' },
    { name: 'Primary (Rust)', colors: colors.primary, description: 'Main brand color - armchair' },
    { name: 'Secondary (Teal)', colors: colors.secondary, description: 'Secondary brand color - sofa' },
    { name: 'Accent - Navy', colors: colors.accent.navy, description: 'Deep navy accents' },
    { name: 'Accent - Coral', colors: colors.accent.coral, description: 'Warm coral accents' },
    { name: 'Accent - Burgundy', colors: colors.accent.burgundy, description: 'Dusty rose accents' },
    { name: 'Accent - Gold', colors: colors.accent.gold, description: 'Elegant gold accents' },
    { name: 'Artwork - Blue', colors: colors.artwork.blue, description: 'Artwork blue tones' },
    { name: 'Artwork - Teal', colors: colors.artwork.teal, description: 'Artwork teal tones' },
    { name: 'Natural - Green', colors: colors.natural.green, description: 'Plant and natural elements' },
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
