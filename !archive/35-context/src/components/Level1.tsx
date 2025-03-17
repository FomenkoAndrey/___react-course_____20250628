import { FirstContext } from '../App'
import Level2 from './Level2'
import { LevelPropsInterface } from './LevelProps.interface'

const Level1 = () => {
  return (
    <FirstContext.Consumer>
      {(contextValue: LevelPropsInterface) => {
        const { value } = contextValue

        return (
          <>
            <h1>
              Level 1, prop from App: <u>{value}</u>
            </h1>
            <Level2 />
          </>
        )
      }}
    </FirstContext.Consumer>
  )
}

export default Level1
