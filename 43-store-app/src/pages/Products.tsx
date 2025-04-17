import { ProductInterface } from '../types/products.interface'
import { useFetch } from '../hooks/useFetch'
import { createUrl } from '../utils/mockapi'
import Product from '../components/products/Product'
import { useState } from 'react'
import { API_ITEMS_PER_PAGE_LIMIT } from '../config/constants'
import AddProductButton from '../components/modals/AddProductButton'
const Products = () => {
  const [page, setPage] = useState(1)
  const [reload, setReload] = useState('0')
  const {
    data: products,
    isLoading,
    error
  } = useFetch<ProductInterface>(createUrl(page), reload)

  return (
    <div>
      <h1>Products</h1>
      <AddProductButton />
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && products.length > 0 && (
        <div className="content">
          <div className="pagination">
            <button
              className="pagination__btn"
              disabled={page === 1}
              onClick={() => setPage((prevState) => prevState - 1)}
            >
              Previous page
            </button>

            <button
              className="pagination__btn"
              disabled={products.length < API_ITEMS_PER_PAGE_LIMIT}
              onClick={() => setPage((prevState) => prevState + 1)}
            >
              Next page
            </button>
          </div>

          <ul className="products-list">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                reload={() => setReload(Date.now().toString())}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Products
