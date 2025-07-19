import { Link, useParams } from 'react-router'

const Features = () => {
  const params = useParams()

  console.log(params)

  return (
    <div>
      <h1>Features</h1>

      <Link to="/features/1">Feature 1</Link>
      <Link to="/features/2">Feature 2</Link>
      <Link to="/features/3">Feature 3</Link>

      <hr />

      <p>
        Feature ID: <b>{params.id || 'No ID'}</b>
      </p>
    </div>
  )
}

export default Features
