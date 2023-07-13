import { isError } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { TestFormValues } from '~types/testForm'

const defaultValues: TestFormValues = {
  name: '',
  surname: '',
  email: '',
  city: '',
  phone: '',
  postalCode: '',
  sex: '',
  music: [],
  comment: '',
  shoeSize: '',
  age: '',
  education: '',
  interests: [],
}

export const useTestForm = () => {
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useTranslation()

  const {
    control,
    formState: { errors },
    setFocus,
    handleSubmit,
  } = useForm<TestFormValues>({
    mode: 'onTouched',
    defaultValues,
  })

  const onSubmit = async (data: TestFormValues) => {
    try {
      setIsSubmitting(true)
      setError('')
      console.log(data)
    } catch (e) {
      if (isError(e)) {
        setError(e.message)
      } else {
        setError(t('errors.something_went_wrong'))
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    submit: handleSubmit(onSubmit),
    isSubmitting,
    setIsSubmitting,
    setFocus,
    control,
    errors,
    error,
  }
}
