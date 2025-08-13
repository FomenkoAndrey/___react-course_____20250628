import { useState } from 'react'

const ProblematicComponent = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(1)

  const computeExpensiveValue = (number: number) => {
    console.log('Виконується важка операція...')
    let result = number
    for (let i = 0; i < 1000000000; i++) {
      result += number
    }
    console.log('...завершено')
    return result
  }

  const expensiveValue = computeExpensiveValue(count)

  return (
    <div>
      <p>Дорогоцінне значення: {expensiveValue}</p>
      <p>Просте значення (item): {item}</p>
      <button onClick={() => setCount(count + 1)}>Збільшити count</button>
      <button onClick={() => setItem(item + 1)}>Збільшити item</button>
    </div>
  )
}

export default ProblematicComponent
