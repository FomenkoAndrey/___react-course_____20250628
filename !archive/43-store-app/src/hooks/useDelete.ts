import axios from 'axios'

export const useDelete = (url: string) => {
  const del = async (id: string) => {
    try {
      const response = await axios.delete(`${url}/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error deleting the product:', ${(error as Error).message}`)
      throw new Error('Failed to delete the product')
    }
  }

  return {delete: del}
}
