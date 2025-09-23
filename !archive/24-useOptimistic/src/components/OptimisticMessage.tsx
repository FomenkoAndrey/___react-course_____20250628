import { useOptimistic, useRef, useState } from 'react'
import { sendMessage } from '../utils/api'
import './OptimisticMessage.css'
import type { MessageInterface } from '../types/Message.interface'
import { createMessage } from '../utils/createMessage'

const OptimisticMessage = () => {
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
        <input name="message" placeholder="Message" required />
      </div>
      <button type="submit" className="btn">
        Send
      </button>
      <ul className="collection">
        {optimisticMessages.map((message) => (
          <li key={message.id} className="collection-item">
            {message.text}
            {message.pending && <small>Adding...</small>}
          </li>
        ))}
      </ul>
    </form>
  )
}

export default OptimisticMessage
