import { NavigationContainer } from '@react-navigation/native'
import React, { FC } from 'react'

import { RootNavigator } from './RootNavigator'
import { linking } from './linking'

import { StatusBar } from '~components'
import { useScreenTracker, useNavigationTheme, useNavigationStatePersistence } from '~hooks'

export const Navigation: FC = () => {
  const { navigationRef, onReady, onStateChange: onStateChangeScreenTracker } = useScreenTracker()
  const navigationTheme = useNavigationTheme()
  const {
    isReady,
    initialState,
    onStateChange: onStateChangeNavigationStatePersistance,
  } = useNavigationStatePersistence()

  // FIXME: use correct type here and maybe use some wrapper to call two functions at once
  const onStateChange = (state: any) => {
    onStateChangeScreenTracker()
    onStateChangeNavigationStatePersistance(state)
  }

  if (!isReady) {
    return null
  }

  return (
    <>
      {/* TODO: move Status bar to a separate component; set default values */}
      <StatusBar animated hideTransitionAnimation="fade" style="dark" />
      <NavigationContainer
        ref={navigationRef}
        onReady={onReady}
        onStateChange={onStateChange}
        theme={navigationTheme}
        linking={linking}
        initialState={initialState}
      >
        <RootNavigator />
      </NavigationContainer>
    </>
  )
}
