import { FormikFieldState } from '../types/formikFieldState'

interface SuccessMessageProps {
  name: string
  touched: FormikFieldState
  errors: FormikFieldState
  successMessage?: string
}

const SuccessMessage = ({
  name,
  touched,
  errors,
  successMessage = 'Дані введено успішно'
}: SuccessMessageProps) => {
  if (!touched[name] || errors[name]) return null
  return <div className="valid-feedback">{successMessage}</div>
}

export default SuccessMessage
