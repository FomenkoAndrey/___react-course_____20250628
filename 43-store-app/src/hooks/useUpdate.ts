import axios from 'axios'
import { ProductInterface } from '../types/products.interface'

export const useUpdate = (url: string) => {
  const update = async (data: ProductInterface) => {
    try {
      const response = await axios.put(`${url}/${data.id}`, data)

      return response.data
    } catch (error) {
      console.log('Error updating the product', (error as Error).message)
      throw new Error('Failed to update the product')
    }
  }

  return { update }
}
