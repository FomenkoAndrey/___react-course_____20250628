import { ReactNode, useState } from 'react'
import Modal from './Modal'
import { ProductInterface } from '../../types/products.interface'
import ProductForm from '../forms/ProductForm'
import { useUpdate } from '../../hooks/useUpdate'
import { API_URL } from '../../config/constants'

interface EditProductButtonProps {
  children: ReactNode
  product: ProductInterface
  reload: () => void
}

const EditProductButton = ({
  children,
  product,
  reload
}: EditProductButtonProps) => {
  const [showModal, setShowModal] = useState(false)
  const { update } = useUpdate(API_URL)

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const handleSubmit = async (product: ProductInterface) => {
    try {
      const updatedProduct = await update(product)
      console.log(updatedProduct)
      handleCloseModal()
      reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button className="product-item__edit" onClick={handleOpenModal}>
        {children}
      </button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Edit Product #{product.id}</h2>
          <ProductForm onSubmit={handleSubmit} product={product} />
        </Modal>
      )}
    </>
  )
}

export default EditProductButton
