import MyComponent from './components/MyComponent'
import styles from './App.module.css'

const App = () => {
  return (
    <div>
      <h1 className={`${styles.center} ${styles.margin}`}>App Component Title</h1>
      <p>APP Component Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <MyComponent />
    </div>
  )
}

export default App
