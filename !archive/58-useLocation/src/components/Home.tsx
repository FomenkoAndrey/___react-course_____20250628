import { Link } from 'react-router'
import NavigationWithState from './NavigationWithState'

const Home = () => {
  return (
    <div>
      <h1>Домашня сторінка</h1>
      <ul>
        <li>
          <Link to="/demo">Демонстрація useLocation</Link>
        </li>
        <li>
          <Link to="/demo#section-num">Демонстрація хешування</Link>
        </li>
        <li>
          <Link to="/demo?section=1&sort=asc">Сортувати за зростанням</Link>
        </li>
        <li>
          <NavigationWithState />
        </li>
      </ul>
    </div>
  )
}

export default Home
