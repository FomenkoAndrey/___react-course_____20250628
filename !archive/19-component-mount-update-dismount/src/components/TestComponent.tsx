import { useEffect, useState } from 'react'

const TestComponent = () => {
  const [count, setCount] = useState(0)

  // Ефект для логування монтування/демонтування
  useEffect(() => {
    console.log('TestComponent mounted') // Лог при монтуванні компонента

    return () => {
      console.log('TestComponent unmounted') // Лог при демонтуванні компонента
    }
  }, []) // Порожній масив залежностей - виконується тільки при монтуванні/демонтуванні

  // Ефект для логування оновлень
  useEffect(() => {
    if (count > 0) {
      console.log(`TestComponent updated ${count} times`) // Лог при оновленні компонента
    }
  }, [count])

  // Ефект для інтервалу
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1) // Використовуємо функціональне оновлення
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, []) // Порожній масив залежностей - інтервал створюється тільки один раз

  return (
    <div>
      <h1>TestComponent</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default TestComponent
