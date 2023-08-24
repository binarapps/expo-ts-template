import { Box, Pressable, Text } from 'native-base'
import { forwardRef, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import { FieldRadioProps } from './types'
import { FormLabel } from '~components/atoms'

export const Radio = forwardRef<{}, FieldRadioProps>(
  (
    {
      isInvalid,
      isRequired,
      isDisabled,
      value,
      radioOptions,
      name,
      errorMessage,
      isError,
      onChange,
      label,
      labelStyle,
    },
    ref
  ) => {
    //TODO: prepare for dark mode
    const renderRadioButtons = useMemo(
      () =>
        radioOptions?.map((item: string, index: number) => {
          return (
            <Pressable ref={ref} key={index} onPress={() => onChange(item)} style={styles.wrapper}>
              <View
                style={[
                  styles.circleOut,
                  {
                    borderColor: isError ? 'red' : 'black',
                  },
                ]}
              >
                {item === value ? (
                  <View
                    style={[styles.circleIn, { backgroundColor: item === value ? 'blue' : 'gray' }]}
                  />
                ) : null}
              </View>
              <Text style={{ marginLeft: 8 }}>{item}</Text>
            </Pressable>
          )
        }),
      [isInvalid, radioOptions, value, isError]
    )

    return (
      <Box width="100%" mb="2">
        <FormLabel label={label} isRequired={isRequired} labelStyle={labelStyle} />
        {renderRadioButtons}
        {errorMessage && (
          <Text mt="1" color="error.600">
            {errorMessage}
          </Text>
        )}
      </Box>
    )
  }
)

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  circleOut: {
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
  },
  circleIn: {
    width: 14,
    height: 14,
    borderRadius: 50,
  },
})
