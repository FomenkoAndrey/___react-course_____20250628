import { useState, type ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { selectUsername, selectUserIsLoading, setUsernameAsync } from '../redux/slices/userSlice'

const User = () => {
  const username = useSelector(selectUsername)
  const isLoading = useSelector(selectUserIsLoading)
  const dispatch = useAppDispatch()

  const [newUsername, setNewUsername] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value)
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setUsernameAsync(newUsername))
    setNewUsername('')
  }

  return (
    <div>
      <h1>
        Username: {username} {isLoading && '⏳'}
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newUsername} onChange={handleChange} disabled={isLoading} />
        <button type="submit" disabled={isLoading}>
          Change Username
        </button>
      </form>
    </div>
  )
}

export default User
