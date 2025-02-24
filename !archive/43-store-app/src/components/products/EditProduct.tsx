import { ReactNode } from 'react'
import { ProductInterface } from '../../types/Product.interface.ts'
import { API_URL } from '../../utils/mockapi.ts'
import { useUpdate } from '../../hooks/useUpdate.ts'
import useModal from '../../hooks/useModal.ts'
import useProductsForm from '../../hooks/useProductsForm.ts'
import ProductModalWrapper from '../modal/ProductModalWrapper.tsx'

interface EditProductProps {
  children: ReactNode
  product: ProductInterface
  reload: () => void
}

const EditProduct = ({children, product, reload}: EditProductProps) => {
  const {update} = useUpdate(API_URL)
  const {showModal, handleOpen, handleClose} = useModal()
  const {handleSubmit, error} = useProductsForm(update, () => {
    handleClose()
    reload()
  })

  return (
      <ProductModalWrapper
          title={`Edit product: ${product.id}`}
          onSubmit={handleSubmit}
          initialProduct={product}
          onClose={handleClose}
          error={error}
          showModal={showModal}
      >
        <button className="product-item__edit" onClick={handleOpen}>
          {children}
        </button>
      </ProductModalWrapper>
  )
}

export default EditProduct
