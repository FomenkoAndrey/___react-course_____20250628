interface ButtonProps {
  onClick: () => void
}

const Button = ({onClick}: ButtonProps) => {
  return (
      <button onClick={onClick}>Increment</button>
  )
}

export default Button
