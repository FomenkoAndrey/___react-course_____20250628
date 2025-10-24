import FormikContainer from './components/FormikContainer'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-xl w-1/2">
        <h1>Formik with Yup Controls Application</h1>
        <FormikContainer />
        {/* <RegistrationForm /> */}
      </div>
    </div>
  )
}

export default App
