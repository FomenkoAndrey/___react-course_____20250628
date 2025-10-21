/* eslint-disable @typescript-eslint/no-explicit-any */
import Checkbox, {
  type CheckboxOptionsInterface,
  type CheckboxProps
} from './Checkbox'
import Input from './Input'
import RadioButton, {
  type RadioButtonOptionsInterface,
  type RadioButtonProps
} from './RadioButton'
import Select, { type SelectOptionsInterface, type SelectProps } from './Select'
import Textarea from './Textarea'

interface FormikControlProps {
  control: string
  label: string
  name: string
  placeholder?: string
  type?: string
  options?:
    | SelectOptionsInterface[]
    | RadioButtonOptionsInterface[]
    | CheckboxOptionsInterface[]
  [key: string]: any
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
      return <Checkbox {...(rest as CheckboxProps)} />
    case 'date':
    case 'time':
    default:
      return null
  }
}

export default FormikControl
