import { createUseStyles } from 'react-jss'

const border = '1px solid red'

export const useStyles = createUseStyles({
  // Стилі для кнопки
  button: {
    padding: '10px 20px',
    background: 'linear-gradient(45deg, blue, red)',
    border,
    borderRadius: '5px',
    fontSize: '24px',
    color: 'white',
    // Стилі для стану наведення курсору
    '&:hover': {
      background: 'linear-gradient(45deg, orange, green)'
    }
  },
  // Стилі для мітки
  label: {
    fontWeight: 'bold',
    fontSize: '24px'
  }
})
