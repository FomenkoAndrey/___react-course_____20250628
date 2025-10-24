const NonMemoComponent = ({ count }: { count: number }) => {
  console.log('NonMemoComponent rendered', count)
  return <h2>Count: {count}</h2>
}

export default NonMemoComponent
