import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

type InitialState = {
  login: string
  password: string
}

const initialState: InitialState = {
  login: '',
  password: ''
}

const validationSchema = object({
  login: string()
    .required('Login is required')
    .min(3, 'Login must be at least 3 characters long')
    .max(15, 'Login must be at most 15 characters long'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must be at most 20 characters long')
})

const handleSubmit = (values: InitialState) => {
  console.log(values)
}

const LoginForm = () => {
  return (
    <Formik initialValues={initialState} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <Field type="text" id="login" name="login" placeholder="Enter your login" />
          <ErrorMessage name="login" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  )
}

export default LoginForm
