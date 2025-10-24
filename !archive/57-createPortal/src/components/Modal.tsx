interface ModalProps {
  onClose: () => void
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Modal Title</h1>
        <p>Modal Content</p> <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
