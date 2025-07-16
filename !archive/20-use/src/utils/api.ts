import axios from 'axios'
import type { UserInterface } from '../types/User.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/users123'

export const fetchDataOptimized: Promise<UserInterface[]> = axios
  .get<UserInterface[]>(API_URL)
  .then((response) => {
    return new Promise<UserInterface[]>((resolve) => setTimeout(() => resolve(response.data), 2000))
  })
  .catch(() => [
    {
      id: 0,
      name: 'Error Loading Data',
      email: 'error',
      username: 'error'
    }
  ])
