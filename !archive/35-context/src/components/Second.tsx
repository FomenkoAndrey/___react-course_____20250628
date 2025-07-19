import { useContext } from 'react'
import { SecondContext } from '../App'

const Second = () => {
  const { secondValue, setSecondValue } = useContext(SecondContext)

  return (
    <div>
      <h2>Second: {secondValue}</h2>
      <button onClick={() => setSecondValue('Updated in Second Component Second Context via createContext!')}>
        Change Second Value
      </button>
    </div>
  )
}

export default Second
