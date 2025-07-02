const App = ({ initialButtonText, initialClassName }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [className, setClassName] = React.useState(initialClassName)

  const onClickHandler = () => {
    setButtonText('Button clicked in React')
    className ? setClassName('') : setClassName('btn-info')
  }

  return (
    <div>
      <h1>Hello from React</h1>
      <button onClick={onClickHandler} className={className}>
        {buttonText}
      </button>
    </div>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me" initialClassName="btn-info" />)
