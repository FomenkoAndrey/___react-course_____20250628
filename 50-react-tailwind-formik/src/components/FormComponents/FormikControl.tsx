import Input from './Input'
import Select, { type SelectOption, type SelectProps } from './Select'
import RadioButton, {
  type RadioButtonProps,
  type RadioOption
} from './RadioButton'
import Textarea from './Textarea'

interface FormikControlProps {
  control: string
  label: string
  name: string
  type?: string
  placeholder?: string
  options?: SelectOption[] | RadioOption[]
  [key: string]: unknown
}

const FormikControl = ({ control, ...rest }: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...(rest as SelectProps)} />
    case 'radio':
      return <RadioButton {...(rest as RadioButtonProps)} />
    case 'checkbox':
    case 'date':
    default:
      return null
  }
}

export default FormikControl
