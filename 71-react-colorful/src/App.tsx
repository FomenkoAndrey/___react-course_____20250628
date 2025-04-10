import { useState } from 'react'
import { HexAlphaColorPicker } from 'react-colorful'

const App = () => {
  const [color, setColor] = useState('#aabbcc80')

  return (
    <div className="App">
      <h1 style={{ color }}>Color Picker Test</h1>
      <HexAlphaColorPicker color={color} onChange={setColor} />

      <div className="value">{color}</div>

      <div className="buttons">
        <button onClick={() => setColor('#4b4b9680')}>Choose blue</button>
        <button onClick={() => setColor('#329632ff')}>Choose green</button>
      </div>
    </div>
  )
}

export default App
