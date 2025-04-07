import { useEffect, useState } from 'react'

const ProblematicComponent = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log('handleClick виклик')
    setCount(count + 1)
  }

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

export default ProblematicComponent
