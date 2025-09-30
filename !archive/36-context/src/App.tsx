/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import Level1 from './components/Level1'
import Second from './components/Second'

interface ContextValue {
  value: string
  setValue?: (value: string) => void
}

export const FirstContext = createContext<ContextValue>({
  value: 'default value'
})

export const SecondContext = createContext<ContextValue>({
  value: 'default value',
  setValue: () => {}
})

const App = () => {
  const [secondValue, setSecondValue] = useState('SecondContext value')

  return (
    <FirstContext.Provider value={{ value: 'PropContext via "createContext"' }}>
      <SecondContext.Provider
        value={{ value: secondValue, setValue: setSecondValue }}
      >
        <h1>App Component: Context API</h1>
        <Level1 />
        <Second />
      </SecondContext.Provider>
    </FirstContext.Provider>
  )
}

export default App
