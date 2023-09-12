import { theme } from '~constants/newTheme'

declare global {
  // COLORS
  type Colors = typeof theme.colors
  type ColorNames = NestedKeys<Colors> | string

  // SPACING
  type Spacing =
    | 'm'
    | 'mt'
    | 'ml'
    | 'mr'
    | 'mb'
    | 'mx'
    | 'my'
    | 'p'
    | 'pr'
    | 'pt'
    | 'pl'
    | 'pb'
    | 'px'
    | 'py'

  type SpacingUnit = keyof Spacing

  // GRADIENTS
  type Gradients = { [key in GradientNames]: [string, string] }

  // THEME
  // TODO: Replace any with correct AppTheme
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type AppTheme = any
}
