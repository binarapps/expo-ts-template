import { forwardRef, useCallback, useMemo } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { FormErrorMessage, FormLabel, Box, Touchable, Text } from '../../atoms'
import { FieldRadioProps } from './types'

import { useColorScheme } from '~contexts'
// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove `useNativeBaseTheme` hook when issue is resolved
import { useNativeBaseTheme } from '~hooks'

export const Radio = forwardRef<TouchableOpacity, FieldRadioProps>(
  (
    {
      isRequired,
      value,
      radioOptions,
      errorMessage,
      isError,
      onChange,
      label,
      labelStyle,
      isDisabled,
    },
    ref
  ) => {
    const { colors } = useNativeBaseTheme()
    const { colorScheme } = useColorScheme()

    const themeColors = useMemo(
      () => (colorScheme === 'light' ? colors.black : colors.white),
      [colors, colorScheme]
    )

    const borderColor = useMemo(
      () => (isError ? colors.red['500'] : isDisabled ? colors.gray['400'] : themeColors),
      [isError, themeColors, colors, isDisabled]
    )
    const bgColor = useCallback(
      (item: string) => (item === value ? colors.blue['500'] : colors.gray['500']),
      [value, colors]
    )

    const renderRadioButtons = useMemo(
      () =>
        radioOptions?.map((item: string, index: number) => {
          return (
            <Touchable
              ref={ref}
              key={index}
              onPress={() => onChange(item)}
              alignItems="center"
              flex={1}
              flexDirection="row"
              height={40}
              width="100%"
            >
              <View
                style={[
                  styles.circleOut,
                  {
                    borderColor,
                  },
                ]}
              >
                {item === value ? (
                  <View style={[styles.circleIn, { backgroundColor: bgColor(item) }]} />
                ) : null}
              </View>
              <Text ml={4}>{item}</Text>
            </Touchable>
          )
        }),
      [radioOptions, value, bgColor, borderColor, onChange, ref]
    )

    return (
      <Box width="100%" mb={2}>
        <FormLabel label={label} isRequired={isRequired} labelStyle={labelStyle} />
        {renderRadioButtons}
        <FormErrorMessage errorMessage={errorMessage} />
      </Box>
    )
  }
)

const styles = StyleSheet.create({
  circleIn: {
    borderRadius: 50,
    height: 14,
    width: 14,
  },
  circleOut: {
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    height: 22,
    justifyContent: 'center',
    width: 22,
  },
})
