import { useState } from 'react'
import { randomizer } from '../utils/randomizer.ts'

interface RandomProps {
  min: number
  max: number
}

const Random = ({min, max}: RandomProps) => {
  const [num, setNum] = useState(randomizer(min, max))

  const changeNum = () => {
    setNum(randomizer(min, max))
  }

  return (
      <div>
        <h1>{num}</h1>
        <button onClick={changeNum}>Randomize</button>
      </div>
  )
}

export default Random
