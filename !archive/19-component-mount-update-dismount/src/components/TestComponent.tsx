import { useEffect, useState } from 'react'

const TestComponent = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('TestComponent mounted')

    return () => {
      console.log('TestComponent unmounted') // ! викликається при демонтуванні компонента
    }
  }, []) // ! порожній масив означає, що ефект буде викликаний лише при монтуванні компонента

  useEffect(() => {
    if (count > 0) {
      console.log(`TestComponent updated ${count} times`) // ! викликається при зміні count
    }
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
      console.log(`Counter: ${count} times`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default TestComponent
