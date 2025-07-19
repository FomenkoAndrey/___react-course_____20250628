import type { LevelPropsInterface } from './LevelProps.interface'
import Level2 from './Level2'

const Level1 = ({ value }: LevelPropsInterface) => {
  return (
    <div>
      <h2>Level 1: {value}</h2>
      <Level2 value={value} />
    </div>
  )
}

export default Level1
