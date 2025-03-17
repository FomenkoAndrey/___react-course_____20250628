interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  title: string
  disabled: boolean
  type: 'button' | 'submit' | 'reset'
}

const Button = ({ children, ...props }: Partial<ButtonProps>) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  )
}

export default Button
