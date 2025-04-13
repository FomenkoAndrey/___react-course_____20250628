import Input from './FormikComponents/Input'
import Textarea from './FormikComponents/Textarea'

interface FormikControlProps {
  control: string
  label: string
  name: string
  id: string
  [key: string]: any
}

const FormikControl = ({ control, ...props }: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...props} />
    case 'textarea':
      return <Textarea {...props} />
    case 'select':
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
      return null
  }
}

export default FormikControl
