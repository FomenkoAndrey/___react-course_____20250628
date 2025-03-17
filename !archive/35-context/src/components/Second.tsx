import { useContext, useEffect } from 'react'
import { SecondContext } from '../App'

const Second = () => {
  const { secondValue, setSecondValue } = useContext(SecondContext)

  useEffect(() => {
    setTimeout(() => {
      setSecondValue('Оновлене значення Second Context')
    }, 5000)
  }, [setSecondValue])

  return <h2 style={{ color: 'red' }}>Second: {secondValue}</h2>
}

export default Second
