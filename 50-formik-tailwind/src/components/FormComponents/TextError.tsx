import type { ReactNode } from 'react'

interface TextErrorProps {
  children: ReactNode
}

const TextError = ({ children }: TextErrorProps) => {
  return <div className="text-red-500">{children}</div>
}

export default TextError
