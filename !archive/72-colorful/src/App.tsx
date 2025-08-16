import { useState } from 'react'
import { HexAlphaColorPicker } from 'react-colorful'

const App = () => {
  const [color, setColor] = useState('#aabbcc')
  return (
    <div>
      <h1 style={{ color }}>Color Picker Test</h1>
      <h2>Color value: {color}</h2>
      <HexAlphaColorPicker color={color} onChange={setColor} />

      <button onClick={() => setColor('#000000')}>Black</button>
      <button onClick={() => setColor('#ffffff')}>White</button>
      <button onClick={() => setColor('#ff0000')}>Red</button>
      <button onClick={() => setColor('#00ff00')}>Green</button>
      <button onClick={() => setColor('#0000ff')}>Blue</button>
      <button onClick={() => setColor('#ffff00')}>Yellow</button>
      <button onClick={() => setColor('#00ffff')}>Cyan</button>
    </div>
  )
}

export default App
