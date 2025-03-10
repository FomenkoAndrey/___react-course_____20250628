import Button from './components/Button'
import { useStyles } from './components/hooks/useStyles'

const App = () => {
  const classes = useStyles()

  return (
    <div>
      <Button>Наведи курсор</Button>
      <div className={classes.label}>Це якийсь підпис</div>
    </div>
  )
}

export default App
