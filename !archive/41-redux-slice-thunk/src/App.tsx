import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './components/Counter'
import User from './components/User'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <User />
    </Provider>
  )
}

export default App
