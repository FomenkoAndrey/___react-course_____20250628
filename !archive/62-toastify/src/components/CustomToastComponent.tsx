const CustomToastComponent = ({ closeToast }: { closeToast: () => void }) => {
  return (
    <div>
      <h1>Custom Toast Component</h1>
      <button onClick={closeToast}>Close</button>
    </div>
  )
}

export default CustomToastComponent
