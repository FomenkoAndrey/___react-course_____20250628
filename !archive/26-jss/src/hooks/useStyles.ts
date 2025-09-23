import { createUseStyles } from 'react-jss'

const isTrue = false

export const useStyles = createUseStyles({
  button: {
    maxWidth: `${isTrue ? '300px' : '200px'}`,
    padding: '10px 20px',
    background: 'linear-gradient(45deg, blue, red)',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)'
    }
  },
  label: {
    fontWeight: 'bold',
    fontSize: '24px'
  }
})
