import axios from 'axios'

export const fetchData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await axios.get('https://jsonplaceholder.typicode.com/users1')
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`)
    }
    throw new Error('Unknown error occurred')
  }
}

// export const fetchData = async () => {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     if (!response.ok) {
//       throw new Error('Failed to fetch data')
//     }

//     const data = await response.json()

//     return data
//   } catch (error) {
//     throw new Error('Failed to fetch data')
//   }
// }
