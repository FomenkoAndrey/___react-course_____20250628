import { Fragment } from 'react/jsx-runtime'

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Hello World</h2>
      <h3>Hello World</h3>
      <h4>Hello World</h4>
      <h5>Hello World</h5>
      <h6>Hello World</h6>
      <p>Hello World</p>
      <p>Hello World</p>

      {['React', 'Vue', 'Angular'].map((framework, index) => (
        <Fragment key={index}>
          <p>{framework} - популярний фреймворк</p>
          <small>Індекс: {index}</small>
        </Fragment>
      ))}
    </>
  )
}

export default App
