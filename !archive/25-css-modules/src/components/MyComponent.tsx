import styles from './MyComponent.module.css'

const MyComponent = () => {
  console.log(styles)

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>MyComponent title</h1>
        <h2>MyComponent subtitle</h2>
        <p>This is a paragraph</p>
      </div>
    </div>
  )
}

export default MyComponent
