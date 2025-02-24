import { ProductInterface } from '../../types/Product.interface.ts'
import createFetchSlice from './createFetchSlice.ts'
import { RootState } from '../store.ts'

const initialState = {
  data: [] as ProductInterface[],
  totalCount: 0,
  error: null,
  isLoading: false
}

const productsSlice = createFetchSlice<ProductInterface>('products', initialState)

export const fetchAllProducts = productsSlice.fetchThunk
export const selectProducts = (state: RootState) => state.products.data
export const selectTotalProductsCount = (state: RootState) => state.products.totalCount
export const selectProductLoading = (state: RootState) => state.products.isLoading
export const selectProductError = (state: RootState) => state.products.error

export default productsSlice.reducer
