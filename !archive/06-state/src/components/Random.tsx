import { useState } from 'react'
import randomizer from '../utils/randomizer'

interface RandomProps {
  min: number
  max: number
}

const Random = ({ min, max }: RandomProps) => {
  const [num, setNum] = useState(0)

  const changeNum = () => {
    setNum(randomizer(min, max))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeNum}>Change Number</button>
    </div>
  )
}

export default Random
