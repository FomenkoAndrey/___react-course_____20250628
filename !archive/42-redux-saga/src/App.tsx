import { Provider } from 'react-redux'
import Counter from './components/Counter'
import User from './components/User'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <User />
    </Provider>
  )
}

export default App
