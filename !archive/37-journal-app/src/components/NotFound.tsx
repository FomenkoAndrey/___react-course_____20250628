import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    setTimeout(() => {
      navigate('/')
    }, 10000)

    return () => clearInterval(timer)
  }, [navigate])

  return (
    <div className="content-center">
      <h1 className="not-found">404</h1>
      <h3>Перенаправлення на головну сторінку через {timeLeft} секунд</h3>
      <Link className="link-xl" to="/">
        Back to home
      </Link>
    </div>
  )
}

export default NotFound
