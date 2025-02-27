interface CounterProps {
  count: number
}

const Counter = ({count}: CounterProps) => {
  return (
      <h1>{count}</h1>
  )
}

export default Counter
