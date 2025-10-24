import { useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from './components/Modal'

const modalRoot = document.getElementById('modal-root')!

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const modal =
    isModalOpen &&
    modalRoot &&
    createPortal(<Modal onClose={handleCloseModal} />, modalRoot)

  return (
    <div>
      <h1>Hello from AppComponent</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      {modal}
    </div>
  )
}

export default App
