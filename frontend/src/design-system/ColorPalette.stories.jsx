import ColorPalette from './ColorPalette'

export default {
  title: 'Design System/Colors',
  component: ColorPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete color palette based on the warm, cozy therapy room aesthetic. This palette balances earthy neutrals with vibrant, sophisticated colors.',
      },
    },
  },
}

export const Palette = {
  render: () => <ColorPalette />,
}
