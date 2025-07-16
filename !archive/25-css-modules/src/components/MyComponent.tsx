import styles from './MyComponent.module.css'

console.log(styles)

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.margin}>CSS modules! My Component Title</h1>
      <p className={styles.textDecoration}>
        APP Component Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>
  )
}

export default MyComponent
