import { _appTheme } from '~constants/theme'

type CustomThemeType = typeof _appTheme

declare module 'native-base' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomTheme extends CustomThemeType {}
}
