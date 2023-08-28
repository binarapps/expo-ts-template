import { forwardRef, useCallback, useMemo } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

import { Icon } from './Icon'
import { CheckboxProps } from './types'

const CHECKBOX_SIZE = 22
export const Checkbox = forwardRef<any, CheckboxProps>(
  (
    {
      disabled,
      value,
      onChange,
      checkboxText,
      size = 30,
      isError,
      checkboxTextColor = 'black',
      isChecked,
      checkboxes,
      ...props
    },
    ref
  ) => {
    const handleValueChange = useCallback(() => {
      return checkboxes ? onChange() : onChange(!value)
    }, [onChange, value, checkboxes])

    const iconColor = useMemo(() => {
      if (disabled && value) {
        return 'gray'
      }

      return 'black'
    }, [disabled, value])

    const bgColor = useMemo(() => {
      if (!value) {
        return 'white'
      }
      if (disabled) {
        return '#EBEBE4'
      }

      return 'transparent'
    }, [disabled, value])

    const borderColor = useMemo(
      () => (isError ? 'red' : disabled ? 'grey' : 'black'),
      [isError, disabled]
    )

    return (
      <Pressable
        onPress={handleValueChange}
        hitSlop={{
          top: 5,
          left: 5,
          bottom: 5,
        }}
        style={styles.mainContainer}
        disabled={disabled}
        ref={ref}
      >
        <View style={styles.row}>
          <View
            style={[
              styles.checkbox,
              {
                backgroundColor: bgColor,
                borderColor,
                height: CHECKBOX_SIZE || size,
                width: CHECKBOX_SIZE || size,
              },
            ]}
            hitSlop={{
              top: 15,
              left: 15,
              bottom: 15,
            }}
            {...props}
          >
            {isChecked ? <Icon color={iconColor} name="check-line" size={18} /> : null}
          </View>
          <Text style={{ color: checkboxTextColor }}>{checkboxText}</Text>
        </View>
      </Pressable>
    )
  }
)

const styles = StyleSheet.create({
  checkbox: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    marginRight: 12,
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
