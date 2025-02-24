import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = <T>(url: string, limit?: number, reload?: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true)

      try {
        const cancelTokenSource = axios.CancelToken.source()
        const response = await axios.get<T[]>(limit ? `${url}?_limit=${limit}` : url, {
          cancelToken: cancelTokenSource.token
        })

        if (response.status !== 200) {
          setError(`Error: Request failed with status code ${response.status}`)
          return
        }

        setData(response.data)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message)
        } else {
          setError(`Error fetching data: ${(error as Error).message}`)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsers()
  }, [url, limit, reload])

  return {data, error, isLoading}
}
