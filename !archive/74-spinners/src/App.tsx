import { type CSSProperties, useState } from 'react'
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  ClipLoader,
  HashLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  MoonLoader
} from 'react-spinners'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red'
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('tomato')

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(e) => setColor(e.target.value)} placeholder="Color of the loader" />

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <BounceLoader
        color="tomato"
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <BarLoader
        color="indigo"
        loading={loading}
        cssOverride={override}
        width={400}
        height={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <BeatLoader
        color="orange"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
      />

      <HashLoader
        color="purple"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <MoonLoader
        color="blue"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <PacmanLoader
        color="green"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <PropagateLoader
        color="red"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <PulseLoader
        color="yellow"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <PuffLoader
        color="pink"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <RingLoader
        color="brown"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <RiseLoader
        color="gray"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default App
