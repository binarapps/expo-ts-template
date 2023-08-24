import { ICheckboxProps, IFormControlProps } from 'native-base'

import { FormLabelProps, InputProps, RadioProps, SelectProps } from '~components'

export type FieldInputProps = InputProps &
  FormLabelProps & {
    label?: string
    helperText?: string
    errorMessage?: string
    errorIcon?: JSX.Element
  }

export type FieldCheckboxProps = ICheckboxProps &
  IFormControlProps & {
    label?: string
  }

export type FieldRadioProps = RadioProps &
  FormLabelProps & {
    label?: string
    radioOptions?: string[]
    errorMessage?: string
    isInvalid?: boolean
    isRequired?: boolean
    isDisabled?: boolean
    name: string
  }

export type FieldSelectProps<T> = SelectProps<T> &
  FormLabelProps & {
    label?: string
    helperText?: string
    errorMessage?: string
    errorIcon?: JSX.Element
    isRequired?: boolean
    isInvalid?: boolean
  }
