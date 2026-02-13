import ColorPaletteTest from './ColorPaletteBuilder.test'

export default {
  title: 'Design System/Color Palette Test',
  component: ColorPaletteTest,
  parameters: {
    layout: 'padded',
  },
}

export const DiagnosticTest = {
  render: () => <ColorPaletteTest />,
}
