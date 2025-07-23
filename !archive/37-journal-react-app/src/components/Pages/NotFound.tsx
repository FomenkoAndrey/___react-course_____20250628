import { Link, useNavigate } from 'react-router'
import { useEffect } from 'react'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [navigate])

  return (
    <div className="content-center">
      <h1 className="not-found">404</h1>
      <div className="link-xl">
        <Link to="/">Go to home page</Link>
      </div>
    </div>
  )
}

export default NotFound
