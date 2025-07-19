import type { LevelPropsInterface } from './LevelProps.interface'
import Level2 from './Level2'
import { PropContext } from '../App'

const Level1 = () => {
  return (
    <PropContext.Consumer>
      {(contextValue: LevelPropsInterface | undefined) => {
        if (!contextValue) {
          return <div>No context value</div>
        }

        const { value } = contextValue

        return (
          <div>
            <h2>Level 1: {value}</h2>
            <Level2 />
          </div>
        )
      }}
    </PropContext.Consumer>
  )
}

export default Level1
