import { useState } from 'react'
import { TodoInterface } from '../types/Todo.interface'

interface FormProps {
  onAddTodo: (todo: TodoInterface) => void
}

const Form = ({ onAddTodo }: FormProps) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onAddTodo({
      id: Date.now(),
      title,
      completed: false
    })
    setTitle('')
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
      <button type="submit">Save</button>
    </form>
  )
}

export default Form
