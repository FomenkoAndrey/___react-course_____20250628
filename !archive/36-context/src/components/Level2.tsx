import Level3 from './Level3'
import { FirstContext } from '../App'
import { useContext } from 'react'

const Level2 = () => {
  const { value } = useContext(FirstContext)
  return (
    <div>
      <h3>Level2 title: {value}</h3>
      <Level3 />
    </div>
  )
}

export default Level2
