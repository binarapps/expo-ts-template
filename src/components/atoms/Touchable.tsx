import { forwardRef } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { generateStyledSystem } from '../utils'
import { StyledProps } from './types'

import { useTheme } from '~hooks'

export type TouchableProps = StyledProps & TouchableOpacityProps

export const Touchable = forwardRef<TouchableOpacity, TouchableProps>(
  ({ children, ...props }, ref) => {
    const { colors } = useTheme()
    const style = generateStyledSystem(props, colors)

    return (
      <TouchableOpacity {...props} ref={ref} style={style}>
        {children}
      </TouchableOpacity>
    )
  }
)
