import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const FormErrorMessage = ({ errorMessage }: { errorMessage?: string }) => {
  return errorMessage && <Text style={styles.text}>{errorMessage}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    marginTop: 8,
  },
})
