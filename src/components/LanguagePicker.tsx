// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Menu } from 'native-base'
import { StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import languages from '../../assets/languages.json'
import { Icon } from './atoms/Icon'
import { Row } from './atoms/Row'
import { Text } from './atoms/Text'
import { Touchable, TouchableProps } from './atoms/Touchables/Touchable'

import { useColorScheme } from '~contexts'
import { useCallback, useTranslation, useTheme } from '~hooks'

export const LanguagePicker: React.FC = () => {
  const { size, colors } = useTheme()

  const { colorScheme } = useColorScheme()
  const { i18n } = useTranslation()
  const language = i18n.language.slice(0, 2).toUpperCase() as keyof typeof languages
  const isOpen = useSharedValue(false)

  const rotateZ = useDerivedValue(() => withTiming(isOpen.value ? 180 : 0))
  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotateZ.value}deg` }],
  }))

  const styles = StyleSheet.create({
    icon: { height: size['8'], justifyContent: 'center' },
  })

  const iconColor = colorScheme === 'light' ? colors.black : colors.white

  const renderTrigger = useCallback(
    (
      props: TouchableProps,
      state: {
        open: boolean
      }
    ) => {
      // Set animated value based on a `Menu` state
      isOpen.value = state.open

      return (
        <Touchable {...props}>
          <Row alignItems="center">
            <Text fontSize="xl" pr={2}>
              {languages[language].emoji}
            </Text>
            <Animated.View style={[animatedIconStyle, styles.icon]}>
              <Icon size={24} name="arrow-down-s-line" color={iconColor} />
            </Animated.View>
          </Row>
        </Touchable>
      )
    },
    [animatedIconStyle, isOpen, language, styles.icon, iconColor]
  )

  const handleItemPress = useCallback(
    (lng: string) => () => {
      i18n.changeLanguage(lng.toLowerCase())
    },
    [i18n]
  )

  return (
    <Menu trigger={renderTrigger}>
      {Object.entries(languages).map(([key, languageData]) => (
        <Menu.Item
          onPress={handleItemPress(key)}
          key={key}
        >{`${languageData.emoji} ${languageData.language}`}</Menu.Item>
      ))}
    </Menu>
  )
}
