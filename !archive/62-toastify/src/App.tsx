import { ToastContainer, toast } from 'react-toastify'

export default function App() {
  const notify = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('Success')
        } else {
          reject('Error')
        }
      }, 5000)
    })
    toast.promise(
      promise,
      {
        pending: 'Pending...',
        success: 'Success!',
        error: 'Error!'
      },
      { position: 'top-center', autoClose: 2000 }
    )
    // toast.success(<CustomToastComponent closeToast={() => toast.dismiss()} />, {
    //   position: 'top-right',
    //   autoClose: 1000
    // })
    // toast.error('Wow so easy !', { position: 'top-left', autoClose: 4000 })
    // toast.warning('Wow so easy !', {
    //   position: 'bottom-right',
    //   autoClose: 8000
    // })
    // toast.info('Wow so easy !', { position: 'bottom-left', autoClose: 10000 })
  }

  return (
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  )
}
