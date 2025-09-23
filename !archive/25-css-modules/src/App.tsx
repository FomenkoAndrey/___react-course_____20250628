import type { CSSProperties } from 'react'
import My from './components/My'
import './App.css'

const App = () => {
  const inlineStyle: CSSProperties = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    textAlign: 'center',
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)'
  }

  return (
    <div>
      <h1 className="header-title">App Component Title</h1>
      <h1 style={inlineStyle}>App Component H2 Title</h1>
      <My />
    </div>
  )
}

export default App
