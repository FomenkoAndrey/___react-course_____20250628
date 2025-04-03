import { useGithubSearch } from './hooks/useGithubSearch'
import SearchForm from './components/SearchForm'
import GithubCards from './components/GithubCards'
import { useRef } from 'react'

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const results = useGithubSearch(inputRef)

  return (
    <div className="container py-5">
      <SearchForm inputRef={inputRef} />
      <GithubCards results={results} />
    </div>
  )
}

export default App
