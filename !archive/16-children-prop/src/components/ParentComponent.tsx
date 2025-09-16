import type { ComponentProps } from '../types/ComponentProps'

const ParentComponent = ({ children, color }: ComponentProps) => {
  const componentStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '20px',
    fontSize: '40px'
  }

  return (
    <div style={componentStyle}>
      <hr />
      <h2>Parent Component:</h2>
      {children}
    </div>
  )
}

export default ParentComponent
