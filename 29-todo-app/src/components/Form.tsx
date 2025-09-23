import { useState, type FormEvent } from 'react'
import Button from './Button'
import type { TodoInterface } from '../types/Todo.interface'
import { v4 as uuidv4 } from 'uuid'

interface FormProps {
  onAddTodo: (todo: TodoInterface) => void
}

const Form = ({ onAddTodo }: FormProps) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onAddTodo({ id: uuidv4(), title, completed: false })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit" title="Submit form">
        Add
      </Button>
    </form>
  )
}

export default Form
