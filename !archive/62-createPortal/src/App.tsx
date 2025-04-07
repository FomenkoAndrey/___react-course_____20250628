import { useState } from 'react'
import Modal from './components/Modal'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root')

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const modal =
    isModalOpen && modalRoot
      ? createPortal(<Modal onClose={handleCloseModal} />, modalRoot)
      : null

  return (
    <div>
      <h1>Hello from App component</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      {modal}
    </div>
  )
}

export default App
