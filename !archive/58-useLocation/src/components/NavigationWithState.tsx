import { Link } from 'react-router'

const NavigationWithState = () => {
  return (
    <div>
      <h3>Навігація із передачею стану</h3>
      <Link to="/profile" state={{ userId: 123, userName: 'John Doe' }}>
        Перейти до профілю (зі станом)
      </Link>
    </div>
  )
}

export default NavigationWithState
