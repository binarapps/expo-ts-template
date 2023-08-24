import type { AbsoluteProps } from './types'

import { Box } from 'native-base'

export const Absolute = (props: AbsoluteProps) => <Box {...props} position="absolute" />
