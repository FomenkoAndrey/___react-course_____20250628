import Button from './components/Button'
import { useStyles } from './hooks/useStyles'

const App = () => {
  const classes = useStyles()

  return (
    <div>
      <Button>Наведи курсор</Button>
      <div className={classes.label}>Це лейбл</div>
    </div>
  )
}

export default App
