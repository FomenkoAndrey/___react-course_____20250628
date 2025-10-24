import { useCallback, useEffect, useState } from 'react'

const OptimizedComponent = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('Викликано функцію handleClick')
    setCount((prevState) => prevState + 1)
  }, [])

  useEffect(() => {
    console.log(
      'Викликано при зміні handleClick. Тобто кожного разу коли створюється новий екземпляр функції handleClick'
    )
  }, [handleClick])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default OptimizedComponent
