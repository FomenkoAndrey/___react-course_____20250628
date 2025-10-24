import { useState } from 'react'

const InputViaState = () => {
  const [value, setValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>Input Via State</h1>
      <input type="text" value={value} onChange={handleInputChange} />
      {value && <h2>{value}</h2>}
    </div>
  )
}

export default InputViaState
