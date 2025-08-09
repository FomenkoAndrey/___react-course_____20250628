import type { ReactNode } from 'react'

interface TextErrorProps {
  children: ReactNode
}

const TextError = ({ children }: TextErrorProps) => {
  return <div className="error">{children}</div>
}

export default TextError
