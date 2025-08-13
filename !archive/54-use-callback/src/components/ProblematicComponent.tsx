import { useEffect, useState } from 'react'

const ProblematicComponent = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log('Виклик функції handleClick')
    setCount((prevState) => prevState + 1)
  }

  useEffect(() => {
    console.log('handleClick перестворено')
  }, [handleClick])

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default ProblematicComponent
