import { theme } from './theme'

import { TextVariant } from '~components'

type VariantStyle = {
  fontFamily: keyof (typeof theme)['fonts']
  fontSize: keyof (typeof theme)['fontSizes']
  fontWeight: keyof (typeof theme)['fontWeights']
}

export const textVariants: { [key in TextVariant]: VariantStyle } = {
  H1: {
    fontFamily: 'heading',
    fontSize: '5xl',
    fontWeight: 'normal',
  },
  H1Regular: {
    fontFamily: 'heading',
    fontSize: '5xl',
    fontWeight: 'normal',
  },
  H1Bold: {
    fontFamily: 'heading',
    fontSize: '5xl',
    fontWeight: 'bold',
  },
  H2: {
    fontFamily: 'heading',
    fontSize: '4xl',
    fontWeight: 'normal',
  },
  H2Regular: {
    fontFamily: 'heading',
    fontSize: '4xl',
    fontWeight: 'normal',
  },
  H2Bold: {
    fontFamily: 'heading',
    fontSize: '4xl',
    fontWeight: 'bold',
  },
  H3: {
    fontFamily: 'heading',
    fontSize: '3xl',
    fontWeight: 'normal',
  },
  H3Regular: {
    fontFamily: 'heading',
    fontSize: '3xl',
    fontWeight: 'normal',
  },
  H3Bold: {
    fontFamily: 'heading',
    fontSize: '3xl',
    fontWeight: 'bold',
  },
  H4: {
    fontFamily: 'heading',
    fontSize: '2xl',
    fontWeight: 'normal',
  },
  H4Regular: {
    fontFamily: 'heading',
    fontSize: '2xl',
    fontWeight: 'normal',
  },
  H4Bold: {
    fontFamily: 'heading',
    fontSize: '2xl',
    fontWeight: 'bold',
  },
  H5: {
    fontFamily: 'heading',
    fontSize: 'xl',
    fontWeight: 'normal',
  },
  H5Regular: {
    fontFamily: 'heading',
    fontSize: 'xl',
    fontWeight: 'normal',
  },
  H5Bold: {
    fontFamily: 'heading',
    fontSize: 'xl',
    fontWeight: 'bold',
  },
  H6: {
    fontFamily: 'heading',
    fontSize: 'lg',
    fontWeight: 'normal',
  },
  H6Regular: {
    fontFamily: 'heading',
    fontSize: 'lg',
    fontWeight: 'normal',
  },
  H6Bold: {
    fontFamily: 'heading',
    fontSize: 'lg',
    fontWeight: 'bold',
  },
  Subtitle: {
    fontFamily: 'body',
    fontSize: 'lg',
    fontWeight: 'normal',
  },
  SubtitleBold: {
    fontFamily: 'body',
    fontSize: 'lg',
    fontWeight: 'bold',
  },
  Body: {
    fontFamily: 'body',
    fontSize: 'md',
    fontWeight: 'normal',
  },
  Regular: {
    fontFamily: 'body',
    fontSize: 'md',
    fontWeight: 'normal',
  },
  Bold: {
    fontFamily: 'body',
    fontSize: 'md',
    fontWeight: 'bold',
  },
  BodyBold: {
    fontFamily: 'body',
    fontSize: 'md',
    fontWeight: 'bold',
  },
  Caption: {
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'normal',
  },
  CaptionBold: {
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'bold',
  },
}
