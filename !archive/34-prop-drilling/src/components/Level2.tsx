import Level3 from './Level3'
import { LevelPropsInterface } from './LevelProps.interface'

const Level2 = ({ value }: LevelPropsInterface) => {
  return (
    <div>
      <h2>
        Level 2, prop from Level1: <u>{value}</u>
      </h2>
      <Level3 value={value} />
    </div>
  )
}

export default Level2
