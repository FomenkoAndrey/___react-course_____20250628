import { LevelPropsInterface } from './LevelProps.interface'
import Level2 from './Level2'

const Level1 = ({ value }: LevelPropsInterface) => {
  return (
    <div>
      <h1>
        Level 1, prop from App: <u>{value}</u>
      </h1>
      <Level2 value={value} />
    </div>
  )
}

export default Level1
