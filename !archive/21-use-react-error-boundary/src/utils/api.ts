import type { UserInterface } from '../types/User.interface'
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchDataOptimized: Promise<UserInterface[]> = axios
  .get<UserInterface[]>(API_URL)
  .then(
    (response) =>
      new Promise<UserInterface[]>((resolve) =>
        setTimeout(() => resolve(response.data), 2000)
      )
  )
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.response?.data}`)
    } else {
      throw new Error('An unknown error occurred')
    }
  })
