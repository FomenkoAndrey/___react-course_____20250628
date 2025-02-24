import { ReactNode } from 'react'
import Modal from '../../modals/Modal.tsx'
import { ProductInterface } from '../../types/Product.interface.ts'
import ProductForm from '../forms/ProductForm.tsx'

interface ProductModalWrapperProps {
  title: string
  onSubmit: (product: ProductInterface) => void,
  initialProduct: Partial<ProductInterface>,
  onClose: () => void,
  error?: string | null
  children: ReactNode
  showModal: boolean
}

const ProductModalWrapper = ({
  title,
  onSubmit,
  initialProduct,
  onClose,
  error,
  children,
  showModal
}: ProductModalWrapperProps) => {
  return (
      <>
        {children}
        {showModal && (
            <Modal onClose={handleCloseModal}>
              <h2>Edit Product #{product.id}</h2>
              {error && <p className="error">{error}</p>}
              <ProductForm onSubmit={handleSubmit} product={product}/>
            </Modal>
        )}
      </>
  )
}

export default ProductModalWrapper
