import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const App = () => {
  return (
    <div>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Hello world!"
        data-tooltip-place="top"
      >
        ◕‿‿◕
      </a>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello to you too!">
        ◕‿‿◕
      </a>
      <Tooltip id="my-tooltip" />
    </div>
  )
}

export default App
