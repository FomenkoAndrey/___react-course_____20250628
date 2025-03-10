import MyComponent from './components/MyComponent'
import './App.css'
import MySass from './components/MyComponent/MySass'
import MyLess from './components/MyComponent/MyLess'

const App = () => {
  return (
    <div>
      <h1>App component title</h1>
      <h2>App component subtitle</h2>
      <p>This is a paragraph</p>
      <hr />

      <MySass />
      <hr />
      <MyLess />
      <hr />
      <MyComponent />
    </div>
  )
}

export default App
