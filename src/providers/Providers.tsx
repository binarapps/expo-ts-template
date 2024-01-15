import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { PortalProvider } from '@gorhom/portal'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'jotai'
import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ColorSchemeProvider } from './ColorSchemeProvider'
import { NotificationsProvider } from './NotificatedProvider'
import { NotificationProvider as ExpoNotificationsProvider } from './NotificationProvider'

import { AppLoading } from '~components'
import { useAppStateActive } from '~hooks'
import { AuthLogic } from '~logic/AuthLogic'
import { store } from '~store'
import { checkForUpdates } from '~utils'

const queryClient = new QueryClient({})

export const Providers = ({ children }: { children: ReactNode }): JSX.Element => {
  useAppStateActive(checkForUpdates, false)

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <PortalProvider>
        <ColorSchemeProvider>
          <SafeAreaProvider>
            <Provider store={store}>
              <ExpoNotificationsProvider>
                {/* @ts-expect-error: error comes from a react-native-notificated library which doesn't have declared children in types required in react 18 */}
                <NotificationsProvider>
                  <QueryClientProvider client={queryClient}>
                    <AppLoading>
                      <BottomSheetModalProvider>
                        {children}
                        <AuthLogic />
                      </BottomSheetModalProvider>
                    </AppLoading>
                  </QueryClientProvider>
                </NotificationsProvider>
              </ExpoNotificationsProvider>
            </Provider>
          </SafeAreaProvider>
        </ColorSchemeProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
})
