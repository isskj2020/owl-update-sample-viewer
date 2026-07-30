import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    graph: {
      thing: string
      subclass: string
      disjoint: string
      line: string
      text: string
    }
  }

  interface PaletteOptions {
    graph?: {
      thing?: string
      subclass?: string
      disjoint?: string
      line?: string
      text?: string
    }
  }
}
