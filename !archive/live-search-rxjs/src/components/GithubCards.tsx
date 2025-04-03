import { DisplayItem } from '../types/displayItem'

interface GithubCardsProps {
  results: DisplayItem[]
}

const GithubCards = ({ results }: GithubCardsProps) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {results.map((item) => (
        <div className="col d-flex" key={item.id}>
          <div className="card mb-3 h-100 flex-grow-1">
            <img
              src={item.avatarUrl}
              alt={item.name}
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text flex-grow-1">{item.description}</p>
              <div className="mt-auto">
                <a href={item.url} className="btn btn-primary" target="_blank">
                  Перейти
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GithubCards
