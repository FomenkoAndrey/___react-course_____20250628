interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  text: string
}

const Button = (props: ButtonProps) => {
  const { type = 'button', disabled = false, text } = props
  return (
    <div>
      <h2>Button {disabled ? 'disabled' : 'enabled'}</h2>
      <button type={type} disabled={disabled}>
        {text}
      </button>
    </div>
  )
}

export default Button
