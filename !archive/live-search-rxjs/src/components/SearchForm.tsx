import { RefObject } from 'react'

const SearchForm = ({
  inputRef
}: {
  inputRef: RefObject<HTMLInputElement | null>
}) => {
  return (
    <div className="row mb-4">
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="search" className="form-label">
              Пошук
            </label>
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Введіть пошуковий запит"
              ref={inputRef}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchForm
