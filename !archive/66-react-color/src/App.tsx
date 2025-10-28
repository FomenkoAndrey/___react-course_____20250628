import { type DragEvent, useState } from 'react'
import { SketchPicker, type RGBColor } from 'react-color'

type ColorState = {
  r: number
  g: number
  b: number
  a: number
}

const App = () => {
  const [color, setColor] = useState<ColorState>({ r: 0, g: 0, b: 0, a: 1 })
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false)

  const rgbaToString = (color: ColorState) => {
    const { r, g, b, a } = color
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }

  const rgbaToHex = (color: ColorState) => {
    const { r, g, b, a } = color
    return `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)}${Math.round(a * 255)
      .toString(16)
      .padStart(2, '0')}`
  }

  const handleColorChange = (updatedColor: RGBColor) => {
    setColor({
      r: updatedColor.r,
      g: updatedColor.g,
      b: updatedColor.b,
      a: updatedColor.a ?? 1
    })
  }

  const handleDragEvent = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <div>
      <h1 style={{ color: rgbaToString(color) }}>
        Selected RGBA color: {rgbaToString(color)}
      </h1>
      <h1 style={{ color: `${rgbaToHex(color)}` }}>
        Selected HEX color: {rgbaToHex(color)}
      </h1>
      <button onClick={() => setShowColorPicker(!showColorPicker)}>
        {showColorPicker ? 'Hide Color Picker' : 'Show Color Picker'}
      </button>
      {showColorPicker && (
        <div
          className="no-drag"
          onDragStart={handleDragEvent}
          onDrag={handleDragEvent}
          onDragEnd={handleDragEvent}
          draggable={false}
        >
          <SketchPicker
            color={color}
            onChange={(color) => handleColorChange(color.rgb)}
          />
        </div>
      )}
    </div>
  )
}

export default App
