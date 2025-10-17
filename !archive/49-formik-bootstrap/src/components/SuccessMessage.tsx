import { Form } from 'react-bootstrap'

interface SuccessMessageProps {
  successMessage?: string
}

const SuccessMessage = ({
  successMessage = 'Looks good!'
}: SuccessMessageProps) => {
  return (
    <Form.Text as="div" className="valid-feedback">
      {successMessage}
    </Form.Text>
  )
}

export default SuccessMessage
