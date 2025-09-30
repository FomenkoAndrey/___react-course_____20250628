import Provider from './components/Provider'
import Todos from './components/Todos'
import Form from './components/Form'
import Actions from './components/Actions'

const App = () => {
  return (
    <Provider>
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <Actions />
        <Todos />
      </div>
    </Provider>
  )
}

export default App
