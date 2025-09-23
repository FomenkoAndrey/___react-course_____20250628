import { v4 as uuidv4 } from 'uuid'
import type { MessageInterface } from '../types/Message.interface'

export const createMessage = (text: string, isPending: boolean = false): MessageInterface => ({
  id: uuidv4(),
  text,
  pending: isPending
})
