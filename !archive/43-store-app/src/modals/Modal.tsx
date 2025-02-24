import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root')

interface ModalProps {
  onClose: () => void
  children: ReactNode
}

const Modal = ({ children, onClose }: ModalProps) => {
  if (!modalRoot) return null

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <span onClick={onClose} className="modal__close">
          &times;
        </span>
        {children}
      </div>
    </div>,
    modalRoot
  )
}

export default Modal
