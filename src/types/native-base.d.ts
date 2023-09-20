import { ProjectColors, _appTheme } from '~constants/theme'
import { IBoxProps } from 'native-base'

type CustomThemeType = typeof _appTheme

declare module 'native-base' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomTheme extends CustomThemeType {}
}

export type ColorNames = keyof typeof ProjectColors | IBoxProps['color']
