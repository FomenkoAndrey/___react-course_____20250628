import { useState } from 'react'
import { HexAlphaColorPicker } from 'react-colorful'

const App = () => {
  const [color, setColor] = useState('#000000ff')

  return (
    <div className="app">
      <h1 style={{ color }}>Color Picker Test</h1>
      <HexAlphaColorPicker color={color} onChange={setColor} />

      <div className="value">{color}</div>

      <div className="buttons">
        <button onClick={() => setColor('#000000ff')}>Black</button>
        <button onClick={() => setColor('#ffffffff')}>White</button>
        <button onClick={() => setColor('#ff0000ff')}>Red</button>
        <button onClick={() => setColor('#00ff00ff')}>Green</button>
        <button onClick={() => setColor('#0000ffff')}>Blue</button>
      </div>
    </div>
  )
}

export default App
