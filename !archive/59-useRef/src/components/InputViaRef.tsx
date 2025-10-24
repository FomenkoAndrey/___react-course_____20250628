import { useRef } from 'react'

const InputViaRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const displayRef = useRef<HTMLHeadingElement>(null)

  const handleInputChange = () => {
    if (inputRef.current && displayRef.current) {
      displayRef.current.textContent = inputRef.current.value
    }
  }

  return (
    <div>
      <h1>Input Via Ref</h1>
      <input ref={inputRef} type="text" onChange={handleInputChange} />
      <h2 ref={displayRef} />
    </div>
  )
}

export default InputViaRef
