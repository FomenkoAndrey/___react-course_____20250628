import { useState, useRef } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#modal-root')

const App = () => {
  const subtitle = useRef<HTMLHeadingElement>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const afterOpenModal = () => {
    if (subtitle.current) {
      subtitle.current.style.color = 'red'
    }
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h2 ref={subtitle}>Modal Title</h2>
        <button onClick={closeModal}>✖</button>
        <div>I am a modal</div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default App
