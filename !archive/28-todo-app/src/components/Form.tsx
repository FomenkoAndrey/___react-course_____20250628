import { useContext, useState, type ChangeEvent, type FormEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../context/Context'
import Button from './Button'

const Form = () => {
  const [title, setTitle] = useState<string>('')
  const { addTodo } = useContext(Context)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo({ id: uuidv4(), title: title.trim(), completed: false })
    setTitle('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a todo" value={title} onChange={handleChange} />
      <Button title="Add Todo" type="submit">
        Add
      </Button>
    </form>
  )
}

export default Form
