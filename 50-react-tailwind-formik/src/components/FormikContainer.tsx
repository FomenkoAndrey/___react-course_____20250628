import { Formik, Form } from 'formik'
import { object, string } from 'yup'
import FormikControl from './FormComponents/FormikControl'

const selectOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Select 1', value: 'selectOption1' },
  { key: 'Select 2', value: 'selectOption2' },
  { key: 'Select 3', value: 'selectOption3' }
]

const radioOptions = [
  { key: 'Radio 1', value: 'radioOption1' },
  { key: 'Radio 2', value: 'radioOption2' },
  { key: 'Radio 3', value: 'radioOption3' }
]

const initialValues = {
  email: '',
  description: ''
}

const validationSchema = object({
  email: string().email('Invalid email address').required('Required'),
  description: string().required('Required')
})

const onSubmit = (values: typeof initialValues) => {
  console.log(values)
}

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
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
            label="Select a topic"
            name="selectOption"
            options={selectOptions}
          />
          <FormikControl
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={radioOptions}
          />
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
