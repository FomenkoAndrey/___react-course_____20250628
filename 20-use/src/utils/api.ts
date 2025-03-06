import axios from 'axios'
import { UserInterface } from '../types/User.inteface'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchData: Promise<UserInterface[]> = axios
  .get<UserInterface[]>(API_URL, {
    timeout: 5000 // Обмеження часу запиту до 5 секунд (5000 мс)
  })
  .then((response) => {
    return new Promise<UserInterface[]>((resolve) => setTimeout(() => resolve(response.data), 2000))
  })
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error(`Request timeout: The server did not respond within 5 seconds`)
      }
      throw new Error(`Error fetching data: ${error.message}`)
    } else {
      throw new Error(`Unknown error occurred`)
    }
  })
