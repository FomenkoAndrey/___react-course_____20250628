import { useState } from 'react'
import { TodoInterface } from '../types/Todo.interface'
import Button from './Button'
import { v4 as uuidv4 } from 'uuid'

interface FormProps {
  onAddTodo: (todo: TodoInterface) => void
}

const Form = ({ onAddTodo }: FormProps) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onAddTodo({
      id: uuidv4(),
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
      <Button type="submit" title="Submit form">
        Save
      </Button>
    </form>
  )
}

export default Form
