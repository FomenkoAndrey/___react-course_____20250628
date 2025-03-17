import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../context/Context'
import Button from './Button'

const Form = () => {
  const [title, setTitle] = useState('')
  const { addTodo } = useContext(Context)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTitle('')
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    addTodo({
      id: uuidv4(),
      title: trimmedTitle,
      completed: false
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new todo"
        value={title}
        onChange={handleInputChange}
      />
      <Button type="submit" title="Submit form">
        Save
      </Button>
    </form>
  )
}

export default Form
