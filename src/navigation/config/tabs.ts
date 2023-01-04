import { t } from 'i18next'

import { ExamplesStack } from '../ExamplesStack'
import { HomeStack } from '../HomeStack'
import { BottomTabsScreens } from './enums'
import { examplesStackScreensData, homeStackScreensData } from './screens'

export const bottomTabsScreensData = [
  {
    component: HomeStack,
    icons: {
      active: 'home-5-fill',
      inactive: 'home-line',
    },
    name: BottomTabsScreens.Home,
    screens: homeStackScreensData,
    title: t('navigation.screen_titles.home_stack'),
  },
  {
    component: ExamplesStack,
    icons: {
      active: 'file-list-2-fill',
      inactive: 'file-list-2-line',
    },
    name: BottomTabsScreens.Examples,
    screens: examplesStackScreensData,
    title: t('navigation.screen_titles.examples_stack'),
  },
] as const