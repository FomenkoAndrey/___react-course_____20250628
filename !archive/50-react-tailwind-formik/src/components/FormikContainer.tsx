import { Formik, Form } from 'formik'
import { object, string, array } from 'yup'
import FormikControl from './FormComponents/FormikControl'
import Button from './FormComponents/Button'

const selectOptions = [
  { key: '', value: 'Select an option' },
  { key: 'selectOption1', value: 'Select 1' },
  { key: 'selectOption2', value: 'Select 2' },
  { key: 'selectOption3', value: 'Select 3' }
]

const radioOptions = [
  { key: 'radioOption1', value: 'Radio 1' },
  { key: 'radioOption2', value: 'Radio 2' },
  { key: 'radioOption3', value: 'Radio 3' }
]

const checkboxOptions = [
  { key: 'checkboxOption1', value: 'Checkbox 1' },
  { key: 'checkboxOption2', value: 'Checkbox 2' },
  { key: 'checkboxOption3', value: 'Checkbox 3' }
]

const initialValues = {
  email: '',
  description: '',
  selectOption: '',
  radioOption: '',
  checkboxOption: [],
  date: null
}

const validationSchema = object({
  email: string().email('Invalid email address').required('Required'),
  description: string().required('Required'),
  selectOption: string().required('Required'),
  radioOption: string().required('Required'),
  checkboxOption: array().min(1, 'Required'),
  date: string().required('Required')
})

const onSubmit = (values: typeof initialValues) => {
  console.log('Form data', values)
}

const FormikContainer = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <FormikControl
          control="input"
          type="email"
          label="Email"
          name="email"
          placeholder="Enter your email"
          id="email-input"
        />
        <FormikControl
          control="textarea"
          label="Description"
          name="description"
          placeholder="Enter your description"
          id="description-textarea"
        />
        <FormikControl
          control="select"
          label="Make a choice"
          name="selectOption"
          options={selectOptions}
          id="select-option"
        />
        <FormikControl
          control="radio"
          label="Radio group"
          name="radioOption"
          options={radioOptions}
          id="radio-option"
        />
        <FormikControl
          control="checkbox"
          label="Checkbox group"
          name="checkboxOption"
          options={checkboxOptions}
          id="checkbox-option"
        />
        <FormikControl control="date" label="Pick a date" name="date" placeholder="Pick a date" id="date-picker" />
        <Button text="Submit" type="submit" />
      </Form>
    </Formik>
  )
}

export default FormikContainer
