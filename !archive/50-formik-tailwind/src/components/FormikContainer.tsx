/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form, Formik } from 'formik'
import { array, object, string } from 'yup'
import FormikControl from './FormComponents/FormikControl'

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
  console.log('Form data', values)
}

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <FormikControl
            id="email-input"
            control="input"
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your email"
          />
          <FormikControl
            id="description-textarea"
            control="textarea"
            label="Description"
            name="description"
            placeholder="Enter your description"
          />
          <FormikControl
            id="select-option"
            control="select"
            label="Select an option"
            name="selectOption"
            options={selectOptions}
          />
          <FormikControl
            id="radio-group"
            control="radio"
            label="Radio group"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            id="checkbox-group"
            control="checkbox"
            label="Checkbox group"
            name="checkboxOption"
            options={checkboxOptions}
          />
          {/* ! Створити компоненти для дати та часу*/}
          {/* ! Переписати через наш власний компонент */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
