import { useNavigate } from 'react-router'

const SortBlock = () => {
  const navigate = useNavigate()

  const setSortKeyHandler = (key?: string) => {
    navigate(`.${key ? `?sort=${key}` : ''}`)
  }

  return (
    <div className="sort-block">
      <h2>Sort articles by:</h2>
      <button onClick={() => setSortKeyHandler('id')}>ID asc</button>
      <button onClick={() => setSortKeyHandler('-id')}>ID desc</button>
      <button onClick={() => setSortKeyHandler('title')}>Title asc</button>
      <button onClick={() => setSortKeyHandler('-title')}>Title desc</button>
      <button onClick={() => setSortKeyHandler()}>Reset sorting</button>
    </div>
  )
}

export default SortBlock
