import { useState } from 'react'
import Modal from '../modals/Modal'
import ProductForm from './forms/ProductForm.tsx'
import { ProductInterface } from '../types/Product.interface'
import { useAdd } from '../hooks/useAdd'
import { API_URL } from '../utils/mockapi'
import { INITIAL_PRODUCT } from '../data/mockData'

const AddProductButton = () => {
  const [showModal, setShowModal] = useState(false)
  const {add, error} = useAdd(API_URL)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSubmit = async (product: ProductInterface) => {
    try {
      const newProduct = await add(product)
      console.log(newProduct)
      handleCloseModal()
    } catch (error) {
      console.error(error)
    }
  }

  return (
      <>
        <button onClick={handleOpenModal}>Add Product</button>

        {showModal && (
            <Modal onClose={handleCloseModal}>
              <h2>Add a new product</h2>
              {error && <p className="error">{error}</p>}
              <ProductForm onSubmit={handleSubmit} product={INITIAL_PRODUCT}/>
            </Modal>
        )}
      </>
  )
}

export default AddProductButton
