import { ComponentProps } from '../types/ComponentProps.interface'

const ChildComponent = ({ children, color = 'yellow' }: ComponentProps) => {
  const componentStyle = {
    backgroundColor: color,
    padding: '20px',
    fontSize: '30px'
  }
  return (
    <div className="child" style={componentStyle}>
      {children}
    </div>
  )
}

export default ChildComponent
