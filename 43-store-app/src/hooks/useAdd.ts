import axios from 'axios'
import { ProductInterface } from '../types/products.interface'

export const useAdd = (url: string) => {
  const add = async (data: ProductInterface) => {
    try {
      const response = await axios.post(url, data)
      return response.data
    } catch (error) {
      console.log(`Error adding product: ${(error as Error).message}`)
      throw new Error('Failed to add the product')
    }
  }
  return { add }
}
