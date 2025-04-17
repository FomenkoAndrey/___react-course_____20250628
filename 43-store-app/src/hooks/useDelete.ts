import axios from 'axios'

export const useDelete = (url: string) => {
  const deleteProduct = async (id: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const response = await axios.delete(`${url}/${id}`)
      return response.data
    } catch (error) {
      console.log(`Error deleting product: ${(error as Error).message}`)
      throw new Error('Failed to delete the product')
    }
  }
  return { delete: deleteProduct }
}
