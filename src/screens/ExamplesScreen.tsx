import { StyleSheet, ScrollView } from 'react-native'

import { Button, Center } from '~components/atoms'
import { useTranslation, useCallback } from '~hooks'

export const ExamplesScreen = (props: ExamplesScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props

  const { t } = useTranslation()

  const goToApplicationInfo = useCallback(() => navigate('ApplicationInfo'), [navigate])
  const goToAppSettings = useCallback(() => navigate('Settings'), [navigate])
  const goToColors = useCallback(() => navigate('Colors'), [navigate])
  const goToComponents = useCallback(() => navigate('Components'), [navigate])
  const goToTypography = useCallback(() => navigate('Typography'), [navigate])
  const goToCityListScreen_EXAMPLE = useCallback(
    () => navigate('DataFromBeScreen_EXAMPLE'),
    [navigate]
  )
  const goToTestForm = useCallback(() => navigate('TestForm'), [navigate])

  const goToHomeStackDetails = useCallback(() => navigate('Details', { id: 'xdd' }), [navigate])

  return (
    <ScrollView style={styles.container}>
      <Center>
        <Button size="lg" width="64" mb={2} onPress={goToApplicationInfo}>
          {t('examples_screen.go_to_application_info')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToColors}>
          {t('examples_screen.go_to_colors')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToComponents}>
          {t('examples_screen.go_to_components')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToTypography}>
          {t('examples_screen.go_to_typography')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToHomeStackDetails}>
          {t('examples_screen.go_to_home_stack_details')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToAppSettings}>
          {t('examples_screen.go_to_settings')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToCityListScreen_EXAMPLE}>
          {t('examples_screen.go_to_screen_with_BEdata')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToTestForm}>
          {t('examples_screen.go_to_screen_test_form')}
        </Button>
      </Center>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
})
