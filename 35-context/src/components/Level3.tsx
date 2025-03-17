import { useContext } from 'react'
import { FirstContext, SecondContext } from '../App'

const Level3 = () => {
  const { value } = useContext(FirstContext)
  const { secondValue, setSecondValue } = useContext(SecondContext)

  const handleClick = () => {
    setSecondValue('Оновлене значення Level3')
  }

  return (
    <div>
      <h3>
        Level 3, prop from Level2: <u>{value}</u>
      </h3>
      <h3 style={{ color: 'blue' }}>
        Level 3, prop from Second: <u>{secondValue}</u>
      </h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Level3
