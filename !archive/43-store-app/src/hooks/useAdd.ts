import axios from 'axios'
import { ProductInterface } from '../types/Product.interface'

export const useAdd = (url: string) => {
  const add = async (data: Partial<ProductInterface>) => {
    try {
      const response = await axios.post(url, data)
      return response.data
    } catch (error) {
      console.error(`Error adding product: ${error}`)
      throw new Error('Failed to add product')
    }
  }

  return {add}
}
