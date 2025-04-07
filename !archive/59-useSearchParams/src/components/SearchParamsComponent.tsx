import { useSearchParams } from 'react-router'

const SearchParamsComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleClick = () => {
    setSearchParams({ name: 'John', age: '20', city: 'Kyiv' })
  }

  return (
    <>
      <h2>
        Параметри пошуку: {JSON.stringify(Object.fromEntries(searchParams))}
      </h2>
      <button onClick={handleClick}>Змінити параметри пошуку</button>
    </>
  )
}

export default SearchParamsComponent
