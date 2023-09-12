import { ViewStyle } from 'react-native'

import { SpacingValue } from '~components'
import { space, scale } from '~constants/newTheme'

export const generateSpace = (value?: SpacingValue, key?: keyof ViewStyle): ViewStyle | false => {
  if (!value || !key) return false

  // @ts-expect-error: native base color literal
  const spaceValue = space[value]

  // strict check because 0 is falsy
  if (spaceValue !== undefined) {
    return { [key]: spaceValue }
  }

  // strict check because 0 is falsy
  if (typeof value === 'number' && spaceValue === undefined) {
    return { [key]: value }
  }

  if (typeof value === 'string' && value.endsWith('px')) {
    return { [key]: parseInt(value, scale) }
  }

  return {
    [key]: value,
  }
}
