import { useRef, useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#modal-root')

const App = () => {
  const subtitle = useRef<HTMLHeadingElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const afterOpenModal = () => {
    subtitle.current!.style.color = 'indigo'
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        onAfterOpen={afterOpenModal}
        contentLabel="Example Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h2 ref={subtitle}>Modal</h2>
        <button className="close-button" onClick={closeModal}>
          <span role="img" aria-label="close">
            ❌
          </span>
        </button>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default App
