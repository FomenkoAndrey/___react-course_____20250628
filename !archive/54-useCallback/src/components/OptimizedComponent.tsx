import { useCallback, useEffect, useState } from 'react'

const OptimizedComponent = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('handleClick виклик')
    setCount((prevState) => prevState + 1)
  }, [])

  useEffect(() => {
    console.log('handleClick перестворено')
  }, [handleClick])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Incement</button>
    </div>
  )
}

export default OptimizedComponent
