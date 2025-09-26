import { useState } from 'react'
import { useRevalidator } from 'react-router'

const RevalidatorDemo = () => {
  const { revalidate } = useRevalidator()

  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString())

  const handleRevalidate = () => {
    setTimestamp(new Date().toLocaleTimeString())
    revalidate()
  }

  return (
    <div>
      <h1>RevalidatorDemo</h1>
      <p>Останнє оновлення: {timestamp}</p>
      <button onClick={handleRevalidate}>Revalidate</button>
    </div>
  )
}

export default RevalidatorDemo
