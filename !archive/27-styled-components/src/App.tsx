import { useEffect } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: purple;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: darkviolet;
  }
`

const StyledHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`

const Header = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log('Header mounted')
  }, [])

  return <StyledHeader>{children}</StyledHeader>
}

const App = () => {
  return (
    <div>
      <Header>My App</Header>
      <Button>Click me</Button>
    </div>
  )
}

export default App
