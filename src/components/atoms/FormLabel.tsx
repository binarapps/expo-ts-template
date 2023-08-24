import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FormLabelProps } from './types'

export const FormLabel = ({ label, isRequired, labelStyle }: FormLabelProps) => {
  const stylesForRequired =
    labelStyle &&
    Object.fromEntries(
      Object.entries(labelStyle).map(([key, value]) =>
        key === 'color' ? [key, 'red'] : [key, value]
      )
    )

  return (
    <View style={[styles.wrapper, { ...(label && { marginBottom: 8, marginTop: 4 }) }]}>
      {label && <Text style={labelStyle}>{label}</Text>}
      {isRequired && <Text style={[stylesForRequired, { color: 'red' }]}>*</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
})
