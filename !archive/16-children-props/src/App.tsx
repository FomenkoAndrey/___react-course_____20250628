import ChildComponent from './components/ChildComponent'
import ParentComponent from './components/ParentComponent'

const App = () => {
  return (
    <div>
      <ParentComponent color="blue">
        <h1>Passing Props from App to ParentComponent</h1>
        <ChildComponent color="red">
          <h3>Passing Props from ParentComponent to ChildComponent</h3>
        </ChildComponent>
      </ParentComponent>
    </div>
  )
}

export default App
