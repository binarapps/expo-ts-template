import React, { ComponentType } from 'react'

import { StyledProps } from '../atoms/types'
import { generateStyledSystem } from './generateStyledSystem'

import { useTheme } from '~hooks'

type StylePropKeys = 'style' | 'contentContainerStyle'

export const generateStyledComponent =
  <P extends StyledProps>(component: ComponentType<P>, styleProp: StylePropKeys = 'style') =>
  (props: P) => {
    const { colors } = useTheme()

    const style = generateStyledSystem(props, colors)

    return React.createElement(component, {
      ...props,
      [styleProp]: [style, (props as Record<StylePropKeys, unknown>)[styleProp]],
    })
  }
