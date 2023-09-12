import { Text, Center, ScrollView } from '~components'

const colorsVariants: ColorNames[] = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
  'success',
  'warning',
  'info',
  'light',
]

export const ColorsScreen = (): JSX.Element => (
  <ScrollView flexGrow={1} p={4} alignItems="center">
    {colorsVariants.map((colorVariant) => (
      <Center
        mb={4}
        key={colorVariant}
        height={32}
        width={256}
        alignSelf="stretch"
        bg={colorVariant}
      >
        <Text color="white">{colorVariant}</Text>
      </Center>
    ))}
  </ScrollView>
)
