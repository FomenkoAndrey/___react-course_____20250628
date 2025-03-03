import { ComponentProps } from '../types/ComponentProps.interface'

const ParentComponent = ({ children, color = 'red' }: ComponentProps) => {
  const componentStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '20px',
    fontSize: '40px'
  }
  return (
    <div className="parent" style={componentStyle}>
      {children}
    </div>
  )
}

export default ParentComponent
