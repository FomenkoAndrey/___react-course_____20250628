import { createUseStyles } from 'react-jss'

const isLarge = false

export const useStyles = createUseStyles({
  button: {
    backgroundColor: 'red',
    padding: isLarge ? '20px' : '10px',
    borderRadius: isLarge ? '10px' : '5px',
    cursor: 'pointer',
    fontSize: isLarge ? '24px' : '16px',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  label: {
    fontSize: isLarge ? '24px' : '16px',
    fontWeight: 'bold'
  }
})
