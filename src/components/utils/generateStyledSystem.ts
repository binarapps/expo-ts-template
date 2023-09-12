import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import {
  FlexProps,
  SpacingProps,
  StyledProps,
  LayoutsProps,
  BordersProps,
  SizingProps,
  EffectsProps,
  BackgroundProps,
} from '../atoms/types'
import { generateSpace } from './generateSpace'

import { hex2rgba, getColorValue, removeFalsyProperties } from '~utils'

const generateFlexStyle = ({
  flex,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
  flexDirection,
  flexGrow,
  flexBasis,
  flexShrink,
  flexWrap,
}: FlexProps): StyleProp<ViewStyle> => {
  const style: StyleProp<ViewStyle> = [
    !!flex && { flex },
    !!justifyContent && { justifyContent },
    !!alignItems && { alignItems },
    !!alignContent && { alignContent },
    !!alignSelf && { alignSelf },
    !!flexDirection && { flexDirection },
    !!flexGrow && { flexGrow },
    !!flexBasis && { flexBasis },
    !!flexShrink && { flexShrink },
    !!flexWrap && { flexWrap },
  ]
  return style.filter(Boolean)
}

const generateSpacingStyle = ({
  m,
  mt,
  ml,
  mb,
  mr,
  mx,
  my,
  p,
  pr,
  pt,
  pl,
  pb,
  px,
  py,
}: SpacingProps): StyleProp<ViewStyle> => {
  const style: StyleProp<ViewStyle> = [
    generateSpace(p, 'padding'),
    generateSpace(px, 'paddingHorizontal'),
    generateSpace(py, 'paddingVertical'),
    generateSpace(pb, 'paddingBottom'),
    generateSpace(pt, 'paddingTop'),
    generateSpace(pl, 'paddingLeft'),
    generateSpace(pr, 'paddingRight'),
    generateSpace(m, 'margin'),
    generateSpace(mx, 'marginHorizontal'),
    generateSpace(my, 'marginVertical'),
    generateSpace(mb, 'marginBottom'),
    generateSpace(mt, 'marginTop'),
    generateSpace(ml, 'marginLeft'),
    generateSpace(mr, 'marginRight'),
  ]

  return style.filter(Boolean)
}

const generateBgStyle = (
  { bg, bgOpacity = 1 }: BackgroundProps,
  colors: Colors
): StyleProp<ViewStyle> => {
  if (!bg) return undefined

  const color = getColorValue({ color: bg, colors })
  if (color && typeof bgOpacity === 'number') {
    return { backgroundColor: hex2rgba(color, bgOpacity) }
  }
}

const generateSizingStyle = ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
}: SizingProps): StyleProp<ViewStyle> => {
  const style: StyleProp<ViewStyle> = {
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
  }
  return style
}

const generateEffectsStyle = ({ opacity }: EffectsProps): StyleProp<ViewStyle> => {
  return {
    opacity,
  }
}

const generateBordersStyle = (
  {
    borderColor,
    borderRadius,
    borderStyle,
    borderWidth,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopWidth,
  }: BordersProps,
  colors: Colors
): StyleProp<ViewStyle> => {
  return [
    !!borderColor && { borderColor: getColorValue({ color: borderColor, colors }) },
    {
      borderBottomEndRadius,
      borderBottomLeftRadius,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      borderTopEndRadius,
      borderTopLeftRadius,
      borderTopWidth,
      borderRadius,
      borderStyle,
      borderWidth,
    },
  ]
}

const generateLayoutsStyle = ({
  position,
  bottom,
  left,
  right,
  top,
  zIndex,
  overflow,
}: LayoutsProps): StyleProp<ViewStyle> => {
  return {
    position,
    bottom,
    left,
    right,
    top,
    zIndex,
    overflow,
  }
}

export const generateStyleSheet = <T extends ViewStyle | TextStyle | ImageStyle>(
  styles: StyleProp<T>[]
) => {
  const flattenStyles = StyleSheet.flatten(styles)
  const filteredFlattenStyles = removeFalsyProperties(flattenStyles)

  return filteredFlattenStyles
}

export const generateStyledSystem = (props: StyledProps, colors: Colors) => {
  const flexStyle = generateFlexStyle(props)
  const spacingStyle = generateSpacingStyle(props)
  const bgStyle = generateBgStyle(props, colors)
  const sizingStyle = generateSizingStyle(props)
  const effectsStyle = generateEffectsStyle(props)
  const bordersStyle = generateBordersStyle(props, colors)
  const layoutsStyle = generateLayoutsStyle(props)

  return generateStyleSheet([
    flexStyle,
    spacingStyle,
    bgStyle,
    sizingStyle,
    effectsStyle,
    bordersStyle,
    layoutsStyle,
  ])
}
