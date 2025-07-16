import { v4 as uuidv4 } from 'uuid'
import type { MessageInterface } from '../types/message.interface'

export function createMessage(text: string, isPending: boolean = false): MessageInterface {
  return {
    id: uuidv4(),
    text,
    pending: isPending
  }
}
