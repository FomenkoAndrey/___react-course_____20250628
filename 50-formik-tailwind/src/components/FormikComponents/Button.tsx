interface ButtonProps {
  text: string
  type: 'submit' | 'button' | 'reset'
  className?: string
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ text, type, className, disabled, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${
        className ? `${className} ` : ''
      }bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
