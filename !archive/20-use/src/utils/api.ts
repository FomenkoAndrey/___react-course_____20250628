import type { UserInterface } from '../types/User.interface'
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users1'

export const fetchDataOptimized: Promise<UserInterface[]> = axios
  .get<UserInterface[]>(API_URL)
  .then(
    (response) =>
      new Promise<UserInterface[]>((resolve) =>
        setTimeout(() => resolve(response.data), 2000)
      )
  )
  .catch((error) => [
    {
      id: 0,
      name: 'Error loading data',
      username: 'Error',
      email: 'Error@example.com'
    }
  ])

// export const fetchData: Promise<UserInterface[]> = new Promise(
//   async (resolve, reject) => {
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 2000))
//       const response = await axios.get(API_URL)
//       resolve(response.data)
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         reject(new Error(`Error fetching data: ${error.message}`))
//       } else {
//         reject(new Error('An unknown error occurred'))
//       }
//     }
//   }
// )
