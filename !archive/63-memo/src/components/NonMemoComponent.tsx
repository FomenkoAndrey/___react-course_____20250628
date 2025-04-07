type NonMemoComponentProps = {
  count: number
}

const NonMemoComponent = ({ count }: NonMemoComponentProps) => {
  console.log('NonMemoComponent rendered:', count)

  return <h2>Count: {count}</h2>
}

export default NonMemoComponent
