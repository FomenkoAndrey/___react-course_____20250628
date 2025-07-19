import Level3 from './Level3'
import type { LevelPropsInterface } from './LevelProps.interface'

const Level2 = ({ value }: LevelPropsInterface) => {
  return (
    <div>
      <h3>Level 2: {value}</h3>
      <Level3 value={value} />
    </div>
  )
}

export default Level2
