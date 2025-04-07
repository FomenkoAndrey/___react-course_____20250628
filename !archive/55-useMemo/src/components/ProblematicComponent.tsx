import { useState } from 'react'

const ProblematicComponent = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(1)

  const computeExpensiveValue = (num: number) => {
    console.log('Виконується надважке обчислення...')
    let value = num
    for (let i = 0; i < 10000000000; i++) {
      value += num
    }
    console.log('Обчислення завершено')
    return value
  }

  const expensiveValue = computeExpensiveValue(count)

  return (
    <div>
      <h2>Дорогоцінне значення: {expensiveValue}</h2>
      <h2>Просте значення (item): {item}</h2>
      <button onClick={() => setCount(count + 1)}>Збільшити count</button>
      <button onClick={() => setItem(item + 1)}>Збільшити item</button>
    </div>
  )
}

export default ProblematicComponent
