import Input from './Input'
import Select from './Select'
import RadioButton from './RadioButton'
import Textarea from './Textarea'
import CheckboxButton from './CheckboxButton'
import DatePicker from './DatePicker'
import type { BaseFormControlProps } from '../../types/baseFormControlProps'
import type { Option } from '../../types/option.interface'
import type { OptionsControlProps } from '../../types/optionsControl.interface'

interface FormikControlProps extends BaseFormControlProps {
  control: string
  type?: string
  options?: Option[]
  autoComplete?: string
}

const FormikControl = ({ control, ...rest }: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...(rest as OptionsControlProps)} />
    case 'radio':
      return <RadioButton {...(rest as OptionsControlProps)} />
    case 'checkbox':
      return <CheckboxButton {...(rest as OptionsControlProps)} />
    case 'date':
      return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl
