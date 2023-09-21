import { ColorValue } from 'react-native'
import { _appTheme, theme } from '~constants/theme'

declare global {
  // FONTS
  type FontSizes = keyof typeof _appTheme.fontSizes
  type LetterSpacings = keyof typeof _appTheme.letterSpacings
  type LineHeights = keyof typeof _appTheme.lineHeights
  type FontWeights = keyof typeof _appTheme.fontWeights
  type Fonts = keyof typeof _appTheme.fonts

  // COLORS
  type Colors = typeof _appTheme.colors
  type ColorNames = NestedKeys<Colors> | ColorValue

  type Sizes = typeof _appTheme.size
  type SizeKeys = keyof Sizes

  // THEME
  type AppTheme = typeof theme.light
}
