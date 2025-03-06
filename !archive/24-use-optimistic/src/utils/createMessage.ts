import { v4 as uuidv4 } from 'uuid'
import { MessageInterface } from '../types/Message.interface'

export const createMessage = (text: string, isPending = false): MessageInterface => {
  return {
    id: uuidv4(),
    text,
    pending: isPending
  }
}
