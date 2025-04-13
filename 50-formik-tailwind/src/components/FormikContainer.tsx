import { object, string } from 'yup'
import FormikControl from './FormikControl'
import { Formik, Form } from 'formik'

const FormikContainer = () => {
  const initialValues = {
    email: '',
    description: ''
  }

  const validationSchema = object({
    email: string().email('Invalid email address').required('Required'),
    description: string().required('Required')
  })

  const onSubmit = (values: any) => {
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
            control="textarea"
            label="Description"
            name="description"
            id="description-textarea"
            placeholder="Tell us about your request..."
          />
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default FormikContainer
