import { useContext, useState, type FormEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../context/context'
import Button from './Button'

const Form = () => {
  const [title, setTitle] = useState<string>('')
  const { addTodo } = useContext(Context)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo({ id: uuidv4(), title: title.trim(), completed: false })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add new todo..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button type="submit" title="Submit form">
        Add
      </Button>
    </form>
  )
}

export default Form
