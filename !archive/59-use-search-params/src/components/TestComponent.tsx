import { useSearchParams } from 'react-router'

const TestComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleClick = () => {
    setSearchParams({ name: 'John', age: '20', city: 'Kyiv' })
    console.log(searchParams.get('name'))
    console.log(searchParams.get('age'))
    console.log(searchParams.get('city'))
  }

  return (
    <div>
      <h1>Параметри пошуку: {JSON.stringify(Object.fromEntries(searchParams))}</h1>
      <button onClick={handleClick}>Змінити параметри пошуку</button>
    </div>
  )
}

export default TestComponent
