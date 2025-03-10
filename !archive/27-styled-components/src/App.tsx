import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: purple;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`

const StyledHeader = styled.header`
  background-color: darkblue;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log('Хедер компонент завантажився')
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
      <Header>
        <h1>Це хедер</h1>
        <Button onClick={handleButtonClick}>{buttonText}</Button>
      </Header>
    </div>
  )
}

export default App
