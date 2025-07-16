const ChildComponent = ({ children, color }: { children: React.ReactNode; color: string }) => {
  const componentStyle = {
    color: color,
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '5px'
  }
  return <div style={componentStyle}>{children}</div>
}

export default ChildComponent
