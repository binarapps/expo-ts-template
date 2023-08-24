import { TextArea, Checkbox, FormControl } from 'native-base'
import { Controller } from 'react-hook-form'
import { StyleSheet } from 'react-native'

import { ControlledField, KeyboardAwareScrollView } from '~components'
import { Button, Text } from '~components/atoms'
import { useMemo, useState, useTestForm, useTranslation } from '~hooks'

const shoeSizes = [
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
]
const AGES = ['18-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']
const MUSICS = ['Metal', 'Heavy Metal', 'Rock', 'Pop', 'Rap']

export const TestFormScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { control, errors, submit, VALIDATION } = useTestForm()
  const [chosenAge, setChosenAge] = useState<string>('')
  const [chosenGender, setChosenGender] = useState<string>('')
  const [chosenEducation, setChosenEducation] = useState('')
  const [chosenShoeSize, setChosenShozeSize] = useState('')

  const INTERESTS = [
    'IT',
    t('test_form.cooking'),
    t('test_form.sport'),
    t('test_form.games'),
    t('test_form.dancing'),
  ]

  const translatedEducation = [
    t('test_form.primary'),
    t('test_form.middle'),
    t('test_form.secondary'),
    t('test_form.postsecondary'),
  ]

  const education = useMemo(
    () =>
      translatedEducation?.map((item) => ({
        value: item,
        label: item,
        labelInDropdown: item,
      })),
    [translatedEducation]
  )

  const mappedShoeSizes = useMemo(
    () =>
      shoeSizes?.map((item) => ({
        value: item,
        label: item,
        labelInDropdown: item,
      })),
    []
  )

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.contact_data')}
      </Text>
      <ControlledField.Input
        isRequired={true}
        control={control}
        errors={errors}
        placeholder={t('test_form.name_placeholder')}
        name={'name'}
        returnKeyType="next"
      />
      <ControlledField.Input
        control={control}
        errors={errors}
        placeholder={t('test_form.surname_placeholder')}
        name={'surname'}
        returnKeyType="next"
        mt={2}
      />
      <ControlledField.Input
        control={control}
        errors={errors}
        placeholder={t('test_form.email_placeholder')}
        name={'email'}
        returnKeyType="next"
        mt={2}
      />
      <ControlledField.Input
        control={control}
        errors={errors}
        placeholder={t('test_form.phone_placeholder')}
        name={'phone'}
        returnKeyType="next"
        mt={2}
      />
      <ControlledField.Input
        control={control}
        errors={errors}
        placeholder={t('test_form.postalCode_placeholder')}
        name={'postalCode'}
        returnKeyType="next"
        mt={2}
      />
      <ControlledField.Input
        control={control}
        errors={errors}
        placeholder={t('test_form.city_placeholder')}
        name={'city'}
        returnKeyType="next"
        mt={2}
      />
      <ControlledField.Radio
        isRequired
        control={control}
        errors={errors}
        name="age"
        radioOptions={AGES}
        value={chosenAge}
        onChange={(val) => {
          setChosenAge(val)
        }}
        rules={VALIDATION.age}
        label={t('test_form.age')}
      />
      <ControlledField.Radio
        isRequired
        control={control}
        errors={errors}
        name="sex"
        value={chosenGender}
        radioOptions={[t('test_form.male'), t('test_form.female')]}
        onChange={(val) => {
          setChosenGender(val)
        }}
        rules={VALIDATION.sex}
        label={t('test_form.sex')}
      />
      <ControlledField.Select
        label={t('test_form.education')}
        items={education}
        value={chosenEducation}
        setValue={(newValue) => {
          setChosenEducation(newValue)
        }}
        control={control}
        name="education"
        errors={errors}
        placeholder={t('test_form.education')}
        isRequired
        rules={VALIDATION.education}
      />
      <ControlledField.Select
        items={mappedShoeSizes}
        value={chosenShoeSize}
        setValue={(newValue) => {
          setChosenShozeSize(newValue)
        }}
        control={control}
        name="shoeSize"
        errors={errors}
        placeholder={t('test_form.shoe_size')}
        rules={VALIDATION.shoeSize}
        isRequired
        label={t('test_form.shoe_size')}
      />
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.which_music')}
      </Text>
      <FormControl isRequired isInvalid={'music' in errors}>
        <Controller
          control={control}
          rules={VALIDATION.music}
          name="music"
          render={({ field }) => (
            <Checkbox.Group value={field.value} onChange={(value) => field.onChange(value)}>
              {MUSICS.map((music) => (
                <Checkbox key={music} value={music}>
                  <Text>{music}</Text>
                </Checkbox>
              ))}
            </Checkbox.Group>
          )}
        />
        <FormControl.ErrorMessage>{errors.music?.message}</FormControl.ErrorMessage>
      </FormControl>
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.interests')}
      </Text>
      <FormControl isRequired isInvalid={'interests' in errors}>
        <Controller
          control={control}
          rules={VALIDATION.interests}
          name="interests"
          render={({ field }) => (
            <Checkbox.Group value={field.value} onChange={(value) => field.onChange(value)}>
              {INTERESTS.map((interest) => (
                <Checkbox key={interest} value={interest}>
                  <Text>{interest}</Text>
                </Checkbox>
              ))}
            </Checkbox.Group>
          )}
        />
        <FormControl.ErrorMessage>{errors.interests?.message}</FormControl.ErrorMessage>
      </FormControl>
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.additiona_comment')}
      </Text>
      <FormControl>
        <Controller
          control={control}
          name="comment"
          render={({ field }) => (
            <TextArea
              autoCompleteType={null}
              placeholder={t('test_form.comment')}
              value={field.value}
              onChangeText={(value) => field.onChange(value)}
            />
          )}
        />
      </FormControl>
      <Button my={4} onPress={submit}>
        {t('test_form.submit')}
      </Button>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
})
