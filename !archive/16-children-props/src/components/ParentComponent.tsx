const ParentComponent = ({ children, color }: { children: React.ReactNode; color: string }) => {
  const componentStyle = {
    color: color,
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '10px',
    margin: '20px',
    backgroundColor: 'lightblue',
    width: '50%'
  }
  return (
    <div style={componentStyle}>
      {children}
      <h2>Parent Component</h2>
    </div>
  )
}

export default ParentComponent
