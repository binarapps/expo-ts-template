import { useMemo, memo } from 'react'
import { TextProps as BaseTextProps, Text as BaseText, TextStyle } from 'react-native'

import { generateStyledComponent, generateStyleSheet } from '../../utils'
import { StyledProps } from '../types'

import { theme } from '~constants'
import { textVariants } from '~constants/textVariants'
import { getColorValue, convertEmToNumber, getFontWeight } from '~utils'

type TypographyProps = {
  fontSize?: keyof (typeof theme)['fontSizes'] | number
  letterSpacing?: keyof (typeof theme)['letterSpacings']
  lineHeight?: keyof (typeof theme)['lineHeights']
  fontWeight?: keyof (typeof theme)['fontWeights']
  fontFamily?: keyof (typeof theme)['fonts']
  color?: ColorNames
  noOfLines?: number
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  textDecoration?: 'none' | 'underline' | 'line-through' | 'underline line-through'
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikeThrough?: boolean
  capitalize?: boolean
  uppercase?: boolean
  lowercase?: boolean
  variant?: TextVariant
}
export type TextProps = StyledProps & BaseTextProps & TypographyProps

const RawText = memo<TextProps>(
  ({
    bold,
    capitalize,
    color,
    italic,
    letterSpacing,
    lineHeight,
    noOfLines,
    strikeThrough,
    textDecoration,
    textTransform,
    underline,
    uppercase,
    lowercase,
    style,
    variant,
    ...props
  }) => {
    const {
      fontFamily: variantFontFamily,
      fontSize: variantFontSize,
      fontWeight: variantFontWeight,
    } = (variant && textVariants[variant]) || {}

    const fontFamily = props.fontFamily || variantFontFamily
    const fontSize = props.fontSize || variantFontSize
    const finalFontSize = fontSize
      ? typeof fontSize === 'number'
        ? fontSize
        : theme.fontSizes[fontSize]
      : undefined
    const fontWeight = props.fontWeight || variantFontWeight

    const lineHeightStyle = useMemo<TextStyle>(
      () => ({
        lineHeight: lineHeight
          ? convertEmToNumber(theme.lineHeights[lineHeight], finalFontSize)
          : undefined,
      }),
      [lineHeight, finalFontSize]
    )

    const letterSpacingStyle = useMemo<TextStyle>(
      () => ({
        letterSpacing: letterSpacing
          ? convertEmToNumber(theme.letterSpacings[letterSpacing], finalFontSize)
          : undefined,
      }),
      [letterSpacing, finalFontSize]
    )

    const textColor = useMemo<TextStyle>(
      () => ({
        color: color ? getColorValue({ color, colors: theme.colors }) : undefined,
      }),
      [color]
    )

    const textAlignmentStyle = useMemo<TextStyle>(
      () => ({
        textAlign: props.textAlign,
      }),
      [props.textAlign]
    )

    const textTransformStyle = useMemo<TextStyle>(
      () => ({
        textTransform:
          capitalize || textTransform === 'capitalize'
            ? 'capitalize'
            : lowercase || textTransform === 'lowercase'
            ? 'lowercase'
            : uppercase || textTransform === 'uppercase'
            ? 'uppercase'
            : 'none',
      }),
      [capitalize, lowercase, uppercase, textTransform]
    )

    const textDecorationStyle = useMemo<TextStyle>(
      () => ({
        textDecorationLine:
          underline || textDecoration === 'underline'
            ? 'underline'
            : strikeThrough || textDecoration === 'line-through'
            ? 'line-through'
            : undefined,
      }),
      [underline, strikeThrough, textDecoration]
    )

    const fontWeightStyle = useMemo<TextStyle>(
      () => ({
        fontWeight: (bold && 'bold') || (fontWeight && getFontWeight(fontWeight)),
      }),
      [fontWeight, bold]
    )

    const fontFamilyStyle = useMemo<TextStyle>(
      () => ({
        fontFamily: fontFamily ? theme.fonts[fontFamily] : undefined,
      }),
      [fontFamily]
    )

    const fontSizeStyle = useMemo<TextStyle>(
      () => ({
        fontSize: finalFontSize,
      }),
      [finalFontSize]
    )

    const textStyle = useMemo(
      () =>
        generateStyleSheet<TextStyle>([
          bold && { fontWeight: 'bold' },
          italic && { fontStyle: 'italic' },
          fontFamilyStyle,
          fontSizeStyle,
          textAlignmentStyle,
          textColor,
          textDecorationStyle,
          letterSpacingStyle,
          lineHeightStyle,
          textTransformStyle,
          fontWeightStyle,
          style,
        ]),
      [
        bold,
        italic,
        fontFamilyStyle,
        fontSizeStyle,
        textAlignmentStyle,
        letterSpacingStyle,
        lineHeightStyle,
        textColor,
        textDecorationStyle,
        textTransformStyle,
        fontWeightStyle,
        style,
      ]
    )

    return <BaseText testID="baseText" numberOfLines={noOfLines} {...props} style={textStyle} />
  }
)

export type TextVariant =
  | 'H1'
  | 'H1Regular'
  | 'H1Bold'
  | 'H2'
  | 'H2Regular'
  | 'H2Bold'
  | 'H3'
  | 'H3Regular'
  | 'H3Bold'
  | 'H4'
  | 'H4Regular'
  | 'H4Bold'
  | 'H5'
  | 'H5Regular'
  | 'H5Bold'
  | 'H6'
  | 'H6Regular'
  | 'H6Bold'
  | 'Body'
  | 'Regular'
  | 'Bold'
  | 'BodyBold'
  | 'Caption'
  | 'CaptionBold'
  | 'Subtitle'
  | 'SubtitleBold'
type TextComposition = React.ComponentType<TextProps> & {
  [key in TextVariant]: React.ComponentType<TextProps>
}

const Text = generateStyledComponent(RawText) as TextComposition
const generateTextVariant = (variant: TextVariant) => (props: TextProps) =>
  <Text variant={variant} {...props} />

Text.H1 = generateTextVariant('H1')
Text.H1Regular = generateTextVariant('H1Regular')
Text.H1Bold = generateTextVariant('H1Bold')
Text.H2 = generateTextVariant('H2')
Text.H2Regular = generateTextVariant('H2Regular')
Text.H2Bold = generateTextVariant('H2Bold')
Text.H3 = generateTextVariant('H3')
Text.H3Regular = generateTextVariant('H3Regular')
Text.H3Bold = generateTextVariant('H3Bold')
Text.H4 = generateTextVariant('H4')
Text.H4Regular = generateTextVariant('H4Regular')
Text.H4Bold = generateTextVariant('H4Bold')
Text.H5 = generateTextVariant('H5')
Text.H5Regular = generateTextVariant('H5Regular')
Text.H5Bold = generateTextVariant('H5Bold')
Text.H6 = generateTextVariant('H6')
Text.H6Regular = generateTextVariant('H6Regular')
Text.H6Bold = generateTextVariant('H6Bold')
Text.Body = generateTextVariant('Body')
Text.Regular = generateTextVariant('Regular')
Text.Bold = generateTextVariant('Bold')
Text.BodyBold = generateTextVariant('BodyBold')
Text.Caption = generateTextVariant('Caption')
Text.CaptionBold = generateTextVariant('CaptionBold')
Text.Subtitle = generateTextVariant('Subtitle')
Text.SubtitleBold = generateTextVariant('SubtitleBold')

export { Text }
