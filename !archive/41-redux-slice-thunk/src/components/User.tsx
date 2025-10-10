import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { selectUsername, setUsername } from '../redux/slices/userSlice'

const User = () => {
  const username = useSelector(selectUsername)
  const dispatch = useAppDispatch()

  const [newUsername, setNewUsername] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value)
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setUsername(newUsername))
    setNewUsername('')
  }

  return (
    <div>
      <h1>Username: {username}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newUsername} onChange={handleChange} />
        <button type="submit">Change Username</button>
      </form>
    </div>
  )
}

export default User
