import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  title: string
  type: 'button' | 'submit' | 'reset'
  disabled: boolean
}

const Button = ({ children, ...props }: Partial<ButtonProps>) => {
  return <button {...props}>{children}</button>
}

export default Button
