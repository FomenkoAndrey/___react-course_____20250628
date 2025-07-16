import Button from './components/Button'
import { useStyles } from './hooks/useStyles'

const App = () => {
  const classes = useStyles()

  return (
    <div>
      <Button>Наведи курсор</Button>
      <div className={classes.label}>Мій текст</div>
    </div>
  )
}

export default App
