import { useCountUp } from 'react-countup'

const App = () => {
  const { start, pauseResume, reset, update } = useCountUp({
    ref: 'counter',
    start: 0,
    end: 100,
    duration: 5,
    prefix: 'EUR: ',
    decimals: 2,
    decimal: '.',
    suffix: ' €'
  })

  return (
    <div style={{ fontSize: '100px', fontWeight: 'bold', textAlign: 'center' }}>
      <span id="counter" />
      <hr />
      <button onClick={start}>Start</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => update(200)}>Update</button>
    </div>
  )
}

export default App
