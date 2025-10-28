import { useCountUp } from 'react-countup'

const App = () => {
  const { start, pauseResume, reset, update } = useCountUp({
    ref: 'counter',
    start: 0,
    end: 100,
    duration: 5,
    decimals: 2,
    decimal: ',',
    separator: ' ',
    prefix: 'EUR ',
    suffix: ' total'
  })
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '80px',
        fontWeight: 'bold'
      }}
    >
      <span id="counter"></span>

      <button onClick={start}>Start</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => update(200)}>Update</button>
    </div>
  )
}

export default App
