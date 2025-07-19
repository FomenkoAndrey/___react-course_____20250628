import { createContext, useState, type Dispatch, type SetStateAction } from 'react'
import Level1 from './components/Level1'
import Second from './components/Second'

export const PropContext = createContext({
  value: ''
})

interface SecondContextInterface {
  secondValue: string
  setSecondValue: Dispatch<SetStateAction<string>>
}

export const SecondContext = createContext<SecondContextInterface>({
  secondValue: '',
  setSecondValue: (_value: string | ((prevState: string) => string)) => {}
})

const App = () => {
  const propValue = 'Привіт, це PropContext via createContext!'
  const [secondValue, setSecondValue] = useState('Second Context via createContext!')

  return (
    <PropContext.Provider value={{ value: propValue }}>
      <SecondContext.Provider value={{ secondValue, setSecondValue }}>
        <div>
          <h1>Prop Drilling Example</h1>
          <Level1 />
          <Second />
        </div>
      </SecondContext.Provider>
    </PropContext.Provider>
  )
}

export default App
