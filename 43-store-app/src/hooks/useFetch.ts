import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string, reload?: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const response = await axios.get(url)

        if (response.status !== 200) {
          throw new Error(`Failed to fetch data from ${url}`)
        }

        setData(response.data)
      } catch (error) {
        setError(error as string)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, reload])

  return { data, error, isLoading }
}
