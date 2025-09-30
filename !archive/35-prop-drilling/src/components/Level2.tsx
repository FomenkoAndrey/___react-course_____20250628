import Level3 from './Level3'
import type { LevelProp } from '../types/LevelProp.interface'

const level2 = ({ propValue }: LevelProp) => {
  return (
    <div>
      {/* <h3>Level2: {propValue}</h3> */}
      <Level3 propValue={propValue} />
    </div>
  )
}

export default level2
