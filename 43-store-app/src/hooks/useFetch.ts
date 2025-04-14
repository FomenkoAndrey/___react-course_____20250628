import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string, limit?: number) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const res = await fetch(limit ? `${url}?_limit=${limit}` : url)

        if (!res.ok) {
          throw new Error(`Failed to fetch data from ${url}`)
        }

        const result = await res.json()
        setData(result)
      } catch (error) {
        setError(error as string)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, limit])

  return { data, error, isLoading }
}
