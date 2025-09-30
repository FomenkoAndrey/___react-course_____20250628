import type { LevelProp } from '../types/LevelProp.interface'
import Level2 from './Level2'

const Level1 = ({ propValue }: LevelProp) => {
  return (
    <div>
      {/* <h1>Level1: {propValue}</h1> */}
      <Level2 propValue={propValue} />
    </div>
  )
}

export default Level1
