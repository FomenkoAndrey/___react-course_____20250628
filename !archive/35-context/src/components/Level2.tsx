import { useContext } from 'react'
import { PropContext } from '../App'
import Level3 from './Level3'

const Level2 = () => {
  const { value } = useContext(PropContext)
  return (
    <div>
      <h3>Level 2: {value}</h3>
      <Level3 value={value} />
    </div>
  )
}

export default Level2
