import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store.ts'
import { useEffect } from 'react'
import { fetchAllProducts } from '../redux/slices/productsSlice.ts'
import { createUrl } from '../utils/mockapi.ts'

const useProductsFetch = (
    page: number,
    name: string,
    sort: string,
    order: string,
    reload: string
) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchAllProducts(createUrl(page, name, sort, order)))
  }, [dispatch, page, name, sort, order, reload])
}

export default useProductsFetch
