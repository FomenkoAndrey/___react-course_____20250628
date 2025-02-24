import axios from 'axios'
import { ProductInterface } from '../types/Product.interface'

export const useUpdate = (url: string) => {
  const update = async (data: ProductInterface) => {
    try {
      const response = await axios.put(`${url}/${data.id}`, data)
      return response.data
    } catch (error) {
      console.error(`Error updating product: ${error}`)
      throw new Error('Failed to update the product')
    }
  }

  return {update}
}
