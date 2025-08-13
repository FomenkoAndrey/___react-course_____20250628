interface ModalProps {
  onClose: () => void
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>This is a modal content</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
