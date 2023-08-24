import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { NativeBaseProvider } from 'native-base'
import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { AuthProvider } from './AuthProvider'
import { ColorSchemeProvider } from './ColorSchemeProvider'
import { NotificationsProvider } from './NotificatedProvider'
import { NotificationProvider as ExpoNotificationsProvider } from './NotificationProvider'

import { AppLoading } from '~components'
import { theme, nativeBaseConfig } from '~constants'
import { useAppStateActive } from '~hooks'
import { checkForUpdates } from '~utils'

const queryClient = new QueryClient({})

export const Providers = ({ children }: { children: ReactNode }): JSX.Element => {
  useAppStateActive(checkForUpdates, false)

  return (
    // NativeBaseProvider includes SafeAreaProvider so that we don't have to include it in a root render tree
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <NativeBaseProvider theme={theme} config={nativeBaseConfig}>
        <ExpoNotificationsProvider>
          {/* @ts-expect-error: error comes from a react-native-notificated library which doesn't have declared children in types required in react 18 */}
          <NotificationsProvider>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <AppLoading>
                  <ColorSchemeProvider>
                    <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
                  </ColorSchemeProvider>
                </AppLoading>
              </AuthProvider>
            </QueryClientProvider>
          </NotificationsProvider>
        </ExpoNotificationsProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
})
