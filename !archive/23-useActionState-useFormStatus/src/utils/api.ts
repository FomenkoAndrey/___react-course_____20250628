import type { LoginDataInterface } from '../types/LoginData.interface'
import type { StateInterface } from '../types/State.interface'

export const fakeLogin = async ({
  username,
  password
}: LoginDataInterface): Promise<LoginDataInterface> => {
  return new Promise<LoginDataInterface>((resolve, reject) => {
    setTimeout(() => {
      if (!username.trim() || !password.trim()) {
        reject(new Error('Username and password are required'))
      } else {
        resolve({
          username,
          password
        })
      }
    }, 1000)
  })
}

export async function login(_prev: StateInterface, formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  try {
    const data = await fakeLogin({ username, password })
    console.log(data)
    return { data, error: null }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { data: null, error: error.message }
    } else {
      return { data: null, error: 'An unknown error occurred' }
    }
  }
}
