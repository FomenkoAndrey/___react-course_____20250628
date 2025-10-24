import { useMemo, useState } from 'react'

const computeExpensiveValue = (num: number) => {
  console.log('Виконується важка обчислювальна операція...')
  let value = num
  for (let i = 0; i < 3000000000; i++) {
    value += num
  }
  console.log('...закінчили обчислювальну операцію')
  return value
}

const OptimizedComponent = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(1)

  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count])

  return (
    <div>
      <h1>
        Дорогоцінне значення (expensiveValue на базі count): {expensiveValue}
      </h1>
      <h1>Просте значення (item): {item}</h1>
      <button onClick={() => setCount(count + 1)}>
        Збільшити count (впливає на expensiveValue)
      </button>
      <button onClick={() => setItem(item + 1)}>Збільшити item</button>
    </div>
  )
}

export default OptimizedComponent
