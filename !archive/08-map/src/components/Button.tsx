interface ButtonProps {
  caption: string
  onClick: () => void
}

const Button = ({ caption, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{caption}</button>
}

export default Button
