import { Link, useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/about')
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>
        Programmatic Navigation via useNavigate to About
      </button>
      <hr />
      <Link to="/about">About</Link>
    </div>
  )
}

export default Home
