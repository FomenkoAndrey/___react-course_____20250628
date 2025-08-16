import { toast, ToastContainer } from 'react-toastify'

const App = () => {
  const notify = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('Success')
        } else {
          reject('Error')
        }
      }, 3000)
    })
    toast.promise(promise, {
      pending: 'Повідомлення завантажується...',
      success: 'Повідомлення успішно завантажено',
      error: 'Помилка при завантаженні повідомлення'
    })
    // toast.success('Hello world', { position: 'top-right', autoClose: 2000 })
    // toast.info(<CustomToast />, {
    //   position: 'top-center',
    //   autoClose: 6000,
    //   theme: 'dark'
    // })
    // toast('Hello world', { position: 'top-left', autoClose: 3000 })
    // toast.error('Hello world', { position: 'bottom-right', autoClose: 4000 })
    // toast.warning('Hello world', { position: 'bottom-left', autoClose: 5000 })
  }

  return (
    <div>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  )
}

export default App
