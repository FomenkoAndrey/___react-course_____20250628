import { useOptimistic, useRef, useState } from 'react'
import { sendMessage } from '../utils/api'
import type { MessageInterface } from '../types/message.interface'
import './OptimisticMessages.css'
import { createMessage } from '../utils/createMessage'

const OptimisticMessages = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [messages, setMessages] = useState<MessageInterface[]>([])

  const [optimisticMessages, setOptimisticMessages] = useOptimistic<MessageInterface[], string>(
    messages,
    (prevMessages, newMessage) => [...prevMessages, createMessage(newMessage, true)]
  )

  async function formAction(formData: FormData) {
    const text = formData.get('message') as string
    if (!text.trim()) return

    setOptimisticMessages(text)
    formRef.current?.reset()

    const message = await sendMessage(text)

    setMessages((prevMessages) => [...prevMessages, createMessage(message)])
  }

  return (
    <form ref={formRef} action={formAction}>
      <div className="form-group">
        <input type="text" name="message" placeholder="Message" required />
      </div>
      <button type="submit" className="btn">
        Send
      </button>
      <ul className="collection">
        {optimisticMessages.map((msg) => (
          <li key={msg.id} className="collection-item">
            {msg.text} {msg.pending && <small>(Adding...)</small>}
          </li>
        ))}
      </ul>
    </form>
  )
}

export default OptimisticMessages
