import { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #f8fafc;
  color: #334155;
  padding: 24px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  width: calc(100% - 40px);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #1e293b;
    border-color: #cbd5e1;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`
const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  width: auto;
  height: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }

  &:active {
    background-color: #1d4ed8;
    transform: translateY(0);
  }
`
const Header = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log('Header Component mounted')
  }, [])

  return <StyledHeader>{children}</StyledHeader>
}

const App = () => {
  const [buttonText, setButtonText] = useState('Натисни мене')

  const handleButtonClick = () => {
    setButtonText('Натиснено')
  }

  return (
    <div>
      <Header>Header App Component</Header>
      <Button onClick={handleButtonClick}>{buttonText}</Button>
    </div>
  )
}

export default App
