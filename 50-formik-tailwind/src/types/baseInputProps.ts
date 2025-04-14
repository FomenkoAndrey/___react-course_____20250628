import { ChangeEvent } from 'react'
import { BaseFormControlProps } from './baseFormControlProps'

export interface BaseInputProps extends BaseFormControlProps {
  value?: string
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void
}
