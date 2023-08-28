import { Controller, ControllerProps, ControllerRenderProps, get } from 'react-hook-form'

import { Field } from '../../molecules'
import type { ControlledCheckboxProps } from './types'

import { useCallback } from '~hooks'

export const Checkbox: React.FC<ControlledCheckboxProps> = ({
  name,
  control,
  errors,
  isRequired,
  rules,
  ...props
}) => {
  const errorMessage = get(errors, name)?.message

  const handlePress = useCallback(
    (field: ControllerRenderProps) => (newValue: boolean) => field.onChange(newValue),
    []
  )

  const renderCheckbox = useCallback(
    ({ field }: Parameters<ControllerProps['render']>[0]) => (
      <Field>
        <Field.Checkbox
          {...props}
          name={field.name}
          value={field.value}
          errorMessage={errorMessage}
          onChange={handlePress(field)}
          isError={!!errorMessage}
          isRequired={isRequired}
        />
      </Field>
    ),
    [errorMessage, isRequired, props, handlePress]
  )
  return <Controller name={name} control={control} rules={rules} render={renderCheckbox} />
}
