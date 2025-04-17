import { FaTrash } from 'react-icons/fa6'
import { ProductInterface } from '../../types/products.interface'
import { FaEdit } from 'react-icons/fa'
import { useDelete } from '../../hooks/useDelete'
import { API_URL } from '../../config/constants'
import EditProductButton from '../modals/EditProductButton'

interface ProductProps {
  product: ProductInterface
  reload: () => void
}

const Product = ({ product, reload }: ProductProps) => {
  const { id, name, description, category, price, image } = product
  const { delete: deleteProduct } = useDelete(API_URL)

  const handleDeleteProduct = async () => {
    if (!id) return
    await deleteProduct(id)
    reload()
  }

  return (
    <li key={id} className="product-item">
      <h2 className="product-item__title">{name}</h2>
      <p className="product-item__description">{description}</p>
      <span className="product-item__category">{category}</span>
      <p className="product-item__price">${price}</p>
      <img src={image} alt={name} className="product-item__image" />
      <div className="product-item__actions">
        <button className="product-item__delete" onClick={handleDeleteProduct}>
          <FaTrash />
        </button>
        <EditProductButton product={product} reload={reload}>
          <FaEdit />
        </EditProductButton>
      </div>
    </li>
  )
}

export default Product
