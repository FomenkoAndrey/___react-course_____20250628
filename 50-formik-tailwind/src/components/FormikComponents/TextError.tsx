import { ReactNode } from 'react'

interface TextErrorProps {
  children?: ReactNode
}

const TextError = ({ children }: TextErrorProps) => {
  return (
    <div className="text-red-600 text-base mt-3 font-medium pl-2">
      {children}
    </div>
  )
}

export default TextError
