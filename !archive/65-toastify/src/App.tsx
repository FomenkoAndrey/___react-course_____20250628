import { toast, ToastContainer } from 'react-toastify'

const App = () => {
  const notify = () => {
    toast.success('Success toast', {
      position: 'top-center',
      autoClose: 2000
    })
    toast.dark('Dark toast', {
      position: 'bottom-left',
      autoClose: 5000
    })
  }

  const notifyPromise = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('Success!')
        } else {
          reject('Error!')
        }
      }, 3000)
    })

    toast.promise(
      promise,
      {
        pending: 'Pending...',
        error: 'Error!',
        success: 'Success!'
      },
      {
        position: 'top-right',
        autoClose: 5000
      }
    )
  }

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <button onClick={notifyPromise}>Notify Promise!</button>
      <ToastContainer />
    </div>
  )
}

export default App
