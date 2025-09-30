import Level2 from './Level2'

const Level1 = () => {
  return (
    <div>
      <h1>Level1 title (no prop drilling)</h1>
      <Level2 />
    </div>
  )
}

export default Level1
