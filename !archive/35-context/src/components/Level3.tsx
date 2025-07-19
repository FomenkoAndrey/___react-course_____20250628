import { useContext } from 'react'
import { PropContext, SecondContext } from '../App'

const Level3 = () => {
  const { value } = useContext(PropContext)
  const { secondValue, setSecondValue } = useContext(SecondContext)
  return (
    <div>
      <h4>Level 3: {value}</h4>
      <h4>Level 3: {secondValue}</h4>
      <button onClick={() => setSecondValue('Updated in Level 3 Second Context via createContext!')}>
        Change Second Value
      </button>
    </div>
  )
}

export default Level3
