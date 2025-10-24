import { useEffect, useState } from 'react'

const ProblematicComponent = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log('Викликано функцію handleClick')
    setCount(count + 1)
  }

  useEffect(() => {
    console.log(
      'Викликано при зміні handleClick. Тобто кожного разу коли ми натискаємо на кнопку "Click me" створюється новий екземпляр функції'
    )
  }, [handleClick])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default ProblematicComponent
