import { useState } from 'react'
import Modal from './Modal'
import { ProductInterface } from '../../types/products.interface'
import ProductForm from '../forms/ProductForm'
import { useAdd } from '../../hooks/useAdd'
import { API_URL } from '../../config/constants'
import { INITIAL_PRODUCT } from '../../data/mockData'

const AddProductButton = () => {
  const [showModal, setShowModal] = useState(false)
  const { add } = useAdd(API_URL)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSubmit = async (product: ProductInterface) => {
    try {
      await add(product)
      console.log(product)
      handleCloseModal()
      // reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button onClick={handleOpenModal}>Add Product</button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Add Product</h2>

          <ProductForm onSubmit={handleSubmit} product={INITIAL_PRODUCT} />
        </Modal>
      )}
    </>
  )
}

export default AddProductButton
