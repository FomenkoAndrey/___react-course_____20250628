import { ReactNode, MouseEvent } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root')

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: ModalProps) => {
  if (!modalRoot) return null

  let mouseDownTarget: EventTarget | null = null

  const handleMouseDown = (e: MouseEvent) => {
    mouseDownTarget = e.target
  }

  const handleMouseUp = (e: MouseEvent) => {
    if (mouseDownTarget === e.target && e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return createPortal(
    <div
      className="modal-overlay"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="modal" onClick={handleContentClick}>
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  )
}

export default Modal
