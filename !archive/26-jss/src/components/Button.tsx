import { useStyles } from '../hooks/useStyles'

const Button = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()
  return <button className={classes.button}>{children}</button>
}

export default Button
