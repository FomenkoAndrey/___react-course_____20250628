import { createContext, useState } from 'react'
import Level1 from './components/Level1'
import Second from './components/Second'

export const FirstContext = createContext({
  value: 'Default Value'
})

export const SecondContext = createContext({
  secondValue: '',
  setSecondValue: (_value: string | ((prevState: string) => string)) => {}
})

const App = () => {
  const propValue = {
    value: 'Привіт, це Prop Context via createContext!'
  }

  const [secondValue, setSecondValue] = useState('Second Context Value')

  return (
    <FirstContext.Provider value={propValue}>
      <SecondContext.Provider value={{ secondValue, setSecondValue }}>
        <Level1 />
        <Second />
      </SecondContext.Provider>
    </FirstContext.Provider>
  )
}

export default App
