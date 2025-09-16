import { useState, useEffect } from 'react'

const Test = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Test Component Mounted')

    return () => {
      console.log('Test Component Unmounted')
    }
  }, [])

  useEffect(() => {
    if (count > 0) {
      console.log(`Count updated to ${count}`)
    }
  }, [count])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
      console.log(`Interval ticked`)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>Test Component</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Test
