import type { Theme } from '@react-navigation/native'
// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { extendTheme } from 'native-base'

export const colorPalette = {
  black: '#000',
  white: '#fff',
  red: {
    50: '#ffe1e1',
    100: '#ffb1b1',
    200: '#ff7f7f',
    300: '#ff4c4c',
    400: '#ff1a1a',
    500: '#e60000',
    600: '#b40000',
    700: '#820000',
    800: '#500000',
    900: '#210000',
  },
  green: {
    50: '#e1ffe1',
    100: '#b1ffb1',
    200: '#7fff7f',
    300: '#4cff4c',
    400: '#1aff1a',
    500: '#00e600',
    600: '#00b400',
    700: '#008200',
    800: '#005000',
    900: '#002100',
  },
  blue: {
    50: '#e1f2ff',
    100: '#b1dfff',
    200: '#7fc2ff',
    300: '#4ca5ff',
    400: '#1a89ff',
    500: '#006eff',
    600: '#0051b4',
    700: '#003480',
    800: '#001d4d',
    900: '#00071a',
  },
  yellow: {
    50: '#fffde1',
    100: '#fffbb1',
    200: '#fff87f',
    300: '#fff54c',
    400: '#fff21a',
    500: '#ffe900',
    600: '#b4b400',
    700: '#828200',
    800: '#505000',
    900: '#1a1a00',
  },
  gray: {
    50: '#f2f2f2',
    100: '#e6e6e6',
    200: '#cccccc',
    300: '#b3b3b3',
    400: '#999999',
    500: '#808080',
    600: '#666666',
    700: '#4d4d4d',
    800: '#333333',
    900: '#1a1a1a',
  },
}

export const colors = {
  primary: colorPalette.blue['500'],
  primaryLight: colorPalette.blue['300'],
  primaryDark: colorPalette.blue['700'],
  secondary: colorPalette.red['500'],
  secondaryLight: colorPalette.red['300'],
  secondaryDark: colorPalette.red['700'],
  tertiary: colorPalette.green['500'],
  tertiaryLight: colorPalette.green['100'],
  tertiaryDark: colorPalette.green['900'],
  success: colorPalette.green['400'],
  warning: colorPalette.yellow['500'],
  danger: colorPalette.red['500'],
  info: colorPalette.blue['100'],
  light: colorPalette.gray['50'],
  dark: colorPalette.black['900'],
  white: colorPalette.white,
  black: colorPalette.black,
  transparent: 'transparent',
}

const commonColors = {
  primary: {
    50: '#e9eeff',
    100: '#c4ccf0',
    200: '#9faae1',
    300: '#7a88d2',
    400: '#5566c4',
    500: '#3b4caa',
    600: '#2d3b85',
    700: '#1f2a61',
    800: '#11193d',
    900: '#05071a',
  },
  secondary: {
    50: '#ffe1f1',
    100: '#ffb1cf',
    200: '#ff7ead',
    300: '#ff4c8c',
    400: '#ff1a6b',
    500: '#e60051',
    600: '#b4003f',
    700: '#82002d',
    800: '#50001a',
    900: '#21000a',
  },
  background: '#fff',
  border: '#000',
  card: '#fff',
  notification: '#000',
  lightGray: '#EBEBE4',
}

export const ProjectColors = {
  //CONFIG: Add your project specific colors here
}

const fontSizes = {
  '2xs': 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
} as const

const scale = fontSizes.md

export const space = {
  px: '1',
  '0': 0,
  '0.5': 0.125 * scale,
  '1': 0.25 * scale,
  '2': 0.5 * scale,
  '3': 0.75 * scale,
  '4': scale,
  '5': 1.25 * scale,
  '6': 1.5 * scale,
  '7': 1.75 * scale,
  '8': 2 * scale,
  '9': 2.25 * scale,
  '10': 2.5 * scale,
  '12': 3 * scale,
  '16': 4 * scale,
  '20': 5 * scale,
  '24': 6 * scale,
  '32': 8 * scale,
  '40': 10 * scale,
  '48': 12 * scale,
  '56': 14 * scale,
  '64': 16 * scale,
  '72': 18 * scale,
  '80': 20 * scale,
  '96': 24 * scale,
} as const

const breakpoints = {
  mobile: 0,
  tablet: 568,
  desktop: 1024,
}

export const theme = extendTheme({
  breakpoints,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  colors,
  space,
  shadows: {
    inputShadow: {
      shadowOffset: { width: 0, height: 2 },
      shadowColor: commonColors.primary['500'],
      shadowOpacity: 0.16,
      elevation: 3,
    },
  },
})

export const lightNavigationTheme: Theme = {
  colors: {
    background: theme.colors.dark[900],
    border: theme.colors.dark[900],
    card: theme.colors.dark[900],
    notification: theme.colors.red[400],
    primary: theme.colors.primary[400],
    text: theme.colors.black,
  },
  dark: false,
}

export const darkNavigationTheme: Theme = {
  colors: {
    background: theme.colors.dark[50],
    border: theme.colors.dark[50],
    card: theme.colors.dark[50],
    notification: theme.colors.red[400],
    primary: theme.colors.primary[400],
    text: theme.colors.white,
  },
  dark: true,
}

export const navigationTheme = {
  light: lightNavigationTheme,
  dark: darkNavigationTheme,
}
