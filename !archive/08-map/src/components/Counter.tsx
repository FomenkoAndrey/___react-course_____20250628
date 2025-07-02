interface CounterProps {
  count: number
}

const Counter = ({ count }: CounterProps) => {
  return <div>Counter: {count}</div>
}

export default Counter
