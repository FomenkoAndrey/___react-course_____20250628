import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  title: string
  type: 'button' | 'submit' | 'reset'
  disabled: boolean
}

const Button = ({ children, type = 'button', ...props }: Partial<ButtonProps>) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
