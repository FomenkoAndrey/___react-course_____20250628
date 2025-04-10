import { useRef, useState } from 'react'
import Modal from 'react-modal'

const App = () => {
  const subtitle = useRef<HTMLHeadingElement>(null)
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const afterOpenModal = () => {
    if (subtitle.current) {
      subtitle.current.style.color = 'indigo'
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
        <h2 ref={subtitle}>Hello</h2>
        <button onClick={closeModal}>Close</button>
        <div>Im am a modal</div>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default App
