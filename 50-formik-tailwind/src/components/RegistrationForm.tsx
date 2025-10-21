import { Formik, Form } from 'formik'
import { object, string, array } from 'yup'
import FormikControl from './FormComponents/FormikControl'

interface RegistrationFormValuesInterface {
  email: string
  description: string
  password: string
  confirmPassword: string
}

const selectOptions = [
  { key: '', value: 'Select an option' },
  { key: 'selectOption1', value: 'Select Option 1' },
  { key: 'selectOption2', value: 'Select Option 2' },
  { key: 'selectOption3', value: 'Select Option 3' }
]

const radioOptions = [
  { key: 'radioOption1', value: 'Radio Option 1' },
  { key: 'radioOption2', value: 'Radio Option 2' },
  { key: 'radioOption3', value: 'Radio Option 3' }
]

const checkboxOptions = [
  { key: 'checkboxOption1', value: 'Checkbox Option 1' },
  { key: 'checkboxOption2', value: 'Checkbox Option 2' },
  { key: 'checkboxOption3', value: 'Checkbox Option 3' }
]

const initialValues = {
  email: '',
  description: '',
  selectOption: '',
  radioOption: '',
  checkboxOption: []
}

const validationSchema = object({
  email: string().email('Invalid email address').required('Required'),
  description: string().required('Required'),
  selectOption: string().required('Required'),
  radioOption: string().required('Required'),
  checkboxOption: array().of(string()).required('Required')
})

const onSubmit = (values: any) => {
  console.log(values)
}

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
            placeholder="Enter your description"
          />
          <FormikControl
            control="select"
            label="Select an option"
            name="selectOption"
            options={selectOptions}
          />
          <FormikControl
            control="radio"
            label="Radio group"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox group"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
