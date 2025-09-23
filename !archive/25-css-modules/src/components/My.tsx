import styles from './My.module.css'

const My = () => {
  return (
    <div className={styles.container}>
      <h1 className="header-title">My Component Title</h1>
      <div className={styles.box}>
        <h2 className={styles.title}>My Component Title!!</h2>
      </div>
    </div>
  )
}

export default My
