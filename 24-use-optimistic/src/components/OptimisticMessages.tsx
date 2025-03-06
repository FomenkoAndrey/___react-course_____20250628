import { useOptimistic, useRef, useState } from 'react'
import { sendMessage } from '../utils/sendMessage'
import { v4 as uuidv4 } from 'uuid'
import './OptimisticMessages.css'
import { MessageInterface } from '../types/Message.interface'
import { createMessage } from '../utils/createMessage'

const OptimisticMessages = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [messages, setMessages] = useState<MessageInterface[]>([])
  const [optimisticMessages, setOptimisticMessages] = useOptimistic<MessageInterface[], string>(
    messages,
    (prevMessages, newMessage) => {
      return [...prevMessages, createMessage(newMessage, true)]
    }
  )

  const formAction = async (formData: FormData) => {
    setOptimisticMessages(formData.get('message') as string)
    const text = formData.get('message') as string

    if (!text.trim()) return

    formRef.current?.reset()

    const message = await sendMessage(text)

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: uuidv4(),
        text: message,
        pending: false
      }
    ])
  }

  return (
    <form ref={formRef} action={formAction}>
      <div className="form-group">
        <input name="message" placeholder="Message" required />
        <label htmlFor="message">Message</label>
      </div>

      <button type="submit" className="btn">
        Send
      </button>

      <ul className="collection">
        {optimisticMessages.map((message) => (
          <li key={message.id} className="collection-item">
            {message.text} {message.pending && <small>Adding...</small>}
          </li>
        ))}
      </ul>
    </form>
  )
}

export default OptimisticMessages
