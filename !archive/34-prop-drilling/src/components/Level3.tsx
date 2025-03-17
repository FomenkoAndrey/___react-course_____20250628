import { LevelPropsInterface } from './LevelProps.interface'

const Level3 = ({ value }: LevelPropsInterface) => {
  return (
    <div>
      <h3>
        Level 3, prop from Level2: <u>{value}</u>
      </h3>
    </div>
  )
}

export default Level3
