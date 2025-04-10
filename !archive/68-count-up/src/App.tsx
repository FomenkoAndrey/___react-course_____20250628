import { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'

const App = () => {
  const countUpRef = useRef<HTMLHeadingElement>(null)

  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef as React.RefObject<HTMLElement>,
    start: 0,
    end: 100,
    duration: 5,
    prefix: 'EUR ',
    decimals: 2,
    decimal: '.',
    suffix: ' total',
    startOnMount: false
  })

  useEffect(() => {
    if (countUpRef.current) {
      countUpRef.current.textContent = 'EUR 0.00 total'
    }
  }, [])

  return (
    <div>
      <h1 ref={countUpRef} />
      <button onClick={() => start()}>Start</button>
      <button onClick={() => pauseResume()}>Pause/Resume</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => update(50)}>Update to 50</button>
    </div>
  )
}

export default App
