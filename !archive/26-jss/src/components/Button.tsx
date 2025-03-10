import { useStyles } from './hooks/useStyles'

const Button = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()
  return <div className={classes.button}>{children}</div>
}

export default Button
