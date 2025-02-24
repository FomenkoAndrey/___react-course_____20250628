import { ProductInterface } from '../types/Product.interface.ts'
import { useCallback, useState } from 'react'

const useProductsForm = (
    apiFunction: (data: ProductInterface) => Promise<ProductInterface>,
    onSuccess?: () => void
) => {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = useCallback(
      async (data: ProductInterface) => {
        try {
          const result = await apiFunction(data)
          console.log(result)
          if (onSuccess) {
            onSuccess()
          }
          setError(null)
        } catch (error) {
          setError((error as Error).message)
        }
      },
      [apiFunction, onSuccess]
  )

  return {error, handleSubmit}
}

export default useProductsForm
