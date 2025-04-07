interface ModalProps {
  onClose: () => void
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Модальное окно</h2>
        <p>Это крутое модальное окно!</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  )
}

export default Modal
