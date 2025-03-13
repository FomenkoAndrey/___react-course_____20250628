import { useState } from 'react'
import { useRevalidator } from 'react-router'

const RevalidatorDemo = () => {
  const [timeStamp, setTimeStamp] = useState(new Date().toLocaleTimeString())

  const { revalidate } = useRevalidator()

  const handleRevalidate = () => {
    setTimeStamp(new Date().toLocaleTimeString())
    revalidate()
  }

  return (
    <div>
      <h1>Revalidator Demo</h1>
      <p>Last updated: {timeStamp}</p>
      <button onClick={handleRevalidate}>Update data</button>
    </div>
  )
}

export default RevalidatorDemo
