import type { BaseFormControlProps } from './baseFormControlProps'
import type { ChangeEvent } from 'react'

export interface BaseInputProps extends BaseFormControlProps {
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}
