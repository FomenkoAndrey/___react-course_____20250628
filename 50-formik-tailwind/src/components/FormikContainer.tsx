import { object, string } from 'yup'
import FormikControl from './FormikComponents/FormikControl'
import { Formik, Form } from 'formik'
import Button from './FormikComponents/Button'

interface FormValuesInterface {
  email: string
  description: string
  selectOption: string
  // radioOption: string
  // checkboxOption: string[]
  date: Date | null
}

const initialValues = {
  email: '',
  description: '',
  selectOption: '',
  date: null
}

const validationSchema = object({
  email: string().email('Invalid email address').required('Required'),
  description: string().required('Required'),
  selectOption: string().required('Please select an option')
})

const dropdownOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' }
]

const FormikContainer = () => {
  const onSubmit = (values: FormValuesInterface) => {
    console.log(values)
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-12 p-12 bg-white rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
        Contact Form
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-8">
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
            id="email-input"
            placeholder="Enter your email address"
          />
          <FormikControl
            control="select"
            label="Select a Topic"
            name="selectOption"
            id="select-topic"
            options={dropdownOptions}
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
            id="description-textarea"
            placeholder="Tell us about your request..."
          />
          <FormikControl
            control="date"
            label="Pick a date"
            name="date"
            placeholder="Select a date"
            id="date-input"
          />
          <Button text="Submit" type="submit" className="w-full" />
        </Form>
      </Formik>
    </div>
  )
}

export default FormikContainer
