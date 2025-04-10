import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa6'
import { IoHome } from 'react-icons/io5'

const App = () => {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '4rem' }}>
      <div>
        <IoHome />
        <FaReact />
      </div>
    </IconContext.Provider>
  )
}

export default App
