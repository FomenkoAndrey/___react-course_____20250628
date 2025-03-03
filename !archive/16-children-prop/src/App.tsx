import ChildComponent from './components/ChildComponent'
import ParentComponent from './components/ParentComponent'

const App = () => {
  console.log('App')
  return (
    <div className="app">
      <ParentComponent color="blue">
        <div>Hello from App to ParentComponent</div>

        <ChildComponent color="green">
          <div>Hello from ParentComponent to ChildComponent</div>
        </ChildComponent>
      </ParentComponent>
    </div>
  )
}

export default App
