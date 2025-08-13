import { IconContext } from 'react-icons'
import { FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'

const App = () => {
  return (
    <IconContext.Provider value={{ color: 'red', size: '2em' }}>
      <div>
        <h1>Hello World</h1>
        <FaGithub />
        <FaReact size={60} color="blue" />
        <FaNodeJs style={{ color: 'green', fontSize: '70px' }} />
        <FaHtml5 />
        <FaCss3 />
      </div>
    </IconContext.Provider>
  )
}

export default App
