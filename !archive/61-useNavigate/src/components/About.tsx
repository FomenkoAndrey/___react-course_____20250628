import { Link, useNavigate } from 'react-router'

const About = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>
        Programmatic Navigation via useNavigate to Home
      </button>
      <hr />
      <Link to="/">Home</Link>
    </div>
  )
}

export default About
