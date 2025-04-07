import { Link } from 'react-router'
import LocationInfo from './LocationInfo'
import QueryParamsExample from './QueryParamsExample'

const DemoPage = () => {
  return (
    <div>
      <h1>Демонстрація useLocation</h1>
      <LocationInfo />
      <QueryParamsExample />
      <Link to="/">Повернутися на головну</Link>
    </div>
  )
}

export default DemoPage
