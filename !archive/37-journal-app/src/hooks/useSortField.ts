import queryString from 'query-string'
import { useLocation } from 'react-router'

export const useSortField = () => {
  const { search } = useLocation()
  const query = queryString.parse(search)
  const sortKey = query.sort?.toString() || null
  const sortQuery = `${sortKey ? `?sort=${sortKey}` : ''}`

  console.log('🚀 sortKey:', sortKey)
  console.log('🚀 sortQuery:', sortQuery)

  return { sortKey, sortQuery }
}
