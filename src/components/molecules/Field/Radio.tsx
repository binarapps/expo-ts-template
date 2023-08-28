import { Box, Pressable, Text } from 'native-base'
import { forwardRef, useCallback, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import { FieldRadioProps } from './types'

import { FormErrorMessage, FormLabel } from '~components/atoms'

export const Radio = forwardRef<any, FieldRadioProps>(
  (
    { isRequired, value, radioOptions, errorMessage, isError, onChange, label, labelStyle },
    ref
  ) => {
    const borderColor = useMemo(() => (isError ? 'red' : 'black'), [isError])
    const bgColor = useCallback((item: string) => (item === value ? 'blue' : 'gray'), [value])

    const renderRadioButtons = useMemo(
      () =>
        radioOptions?.map((item: string, index: number) => {
          return (
            <Pressable ref={ref} key={index} onPress={() => onChange(item)} style={styles.wrapper}>
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
              <Text style={styles.text}>{item}</Text>
            </Pressable>
          )
        }),
      [radioOptions, value, bgColor, borderColor, onChange, ref]
    )

    return (
      <Box width="100%" mb="2">
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
  text: {
    marginLeft: 8,
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 40,
    width: '100%',
  },
})
