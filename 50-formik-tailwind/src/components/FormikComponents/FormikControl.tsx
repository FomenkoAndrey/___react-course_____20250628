import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import { BaseFormControlProps } from '../../types/baseFormControlProps'
import { ControlType } from '../../types/controlType'
import { OptionInterface } from '../../types/option.interface'
import { OptionsControlProps } from '../../types/optionsControlProps'
import DatePicker from './DatePicker'

// Загальний тип для FormikControl
interface FormikControlProps extends BaseFormControlProps {
  control: ControlType
  options?: OptionInterface[]
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
      return null // TODO: Додати компонент Radio
    case 'checkbox':
      return null // TODO: Додати компонент Checkbox
    case 'date':
      return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl
