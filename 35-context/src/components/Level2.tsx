import { useContext } from 'react'
import { FirstContext } from '../App'
import Level3 from './Level3'

const Level2 = () => {
  const { value } = useContext(FirstContext)

  return (
    <div>
      <h2>
        Level 2, prop from Level1: <u>{value}</u>
      </h2>
      <Level3 />
    </div>
  )
}

export default Level2
