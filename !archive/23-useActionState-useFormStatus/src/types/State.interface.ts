import type { LoginDataInterface } from './LoginData.interface'

export interface StateInterface {
  data: LoginDataInterface | null
  error: string | null
}
