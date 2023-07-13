import { Button, TextArea, Checkbox, FormControl, Text, Select } from 'native-base'
import { Controller } from 'react-hook-form'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { ControlledField } from '~components'
import { useState, useTestForm, useTranslation } from '~hooks'

const SHOE_SIZES = [
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

export const TestFormScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { control, errors, submit } = useTestForm()
  const [sex, setSex] = useState<string>('')

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={style.scrollViewContainer}
      enableOnAndroid
      extraHeight={100}
      keyboardShouldPersistTaps="handled"
    >
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.contact_data')}
      </Text>
      <ControlledField.Input
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
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.sex')}
      </Text>
      <ControlledField.Radio
        control={control}
        errors={errors}
        name="sex"
        value={sex}
        radioOptions={[t('test_form.male'), t('test_form.female')]}
        onChange={setSex}
      />
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.shoe_size')}
      </Text>
      <FormControl>
        <Controller
          control={control}
          name="shoeSize"
          render={({ field }) => (
            <Select
              selectedValue={field.value}
              placeholder={t('test_form.shoe_size')}
              mt={1}
              _selectedItem={{
                bg: 'primary.100',
              }}
              onValueChange={(itemValue) => field.onChange(itemValue)}
            >
              {SHOE_SIZES.map((size) => (
                <Select.Item key={size} label={size} value={size} />
              ))}
            </Select>
          )}
        />
      </FormControl>
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.which_music')}
      </Text>
      <FormControl>
        <Controller
          control={control}
          name="music"
          render={({ field }) => (
            <Checkbox.Group value={field.value} onChange={(value) => field.onChange(value)}>
              <Checkbox value="Rock">
                <Text>Rock</Text>
              </Checkbox>
              <Checkbox value="Metal">
                <Text>Metal</Text>
              </Checkbox>
              <Checkbox value="Pop">
                <Text>Pop</Text>
              </Checkbox>
              <Checkbox value="Rap">
                <Text>Rap</Text>
              </Checkbox>
              <Checkbox value="Techno">
                <Text>Techno</Text>
              </Checkbox>
              <Checkbox value="Classic">
                <Text>{t('test_form.classic_music')}</Text>
              </Checkbox>
            </Checkbox.Group>
          )}
        />
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

const style = StyleSheet.create({
  scrollViewContainer: { paddingHorizontal: 24 },
})
