import ParentComponent from './components/ParentComponent'
import ChildrenComponent from './components/ChildrenComponent'

const App = () => {
  return (
    <div>
      <h1>Demo Passed children props</h1>

      <ParentComponent color="red">
        <h2>Parent Component Title passed from App to Parent </h2>

        <ChildrenComponent color="blue">
          <h3>Children Component Title passed from Parent to Children</h3>
        </ChildrenComponent>
      </ParentComponent>
    </div>
  )
}

export default App
