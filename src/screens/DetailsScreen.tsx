import { useBottomSheet, Center, Text, Button, Box } from '~components'
import { useTranslation } from '~hooks'

export const DetailsScreen = (props: DetailsScreenProps): JSX.Element => {
  const {
    route: { params },
  } = props
  const { bottomSheetComponentRenderFunction, presentBottomSheet } = useBottomSheet({
    title: 'Details bottom sheet',
  })
  const { t } = useTranslation()

  const bottomSheet = bottomSheetComponentRenderFunction(
    <Box px={4} py={10}>
      <Text color="text">{t('details_screen.awesome')}</Text>
    </Box>
  )

  return (
    <Center>
      <Text>{t('details_screen.title')}</Text>
      <Button onPress={presentBottomSheet}>{t('details_screen.open_bottom_sheet')}</Button>
      <Text color="text">
        {t('details_screen.screen_params', { params: JSON.stringify(params) })}
      </Text>
      {bottomSheet}
    </Center>
  )
}
