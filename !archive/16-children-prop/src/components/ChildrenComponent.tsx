import type { ComponentProps } from '../types/ComponentProps'

const ChildrenComponent = ({ children, color }: ComponentProps) => {
  const componentStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '20px',
    fontSize: '30px'
  }

  return (
    <div style={componentStyle}>
      <hr />
      <h3>Children Component:</h3>
      {children}
    </div>
  )
}

export default ChildrenComponent
