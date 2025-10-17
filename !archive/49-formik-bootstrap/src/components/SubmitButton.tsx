import { Button, Spinner } from 'react-bootstrap'

interface SubmitButtonProps {
  isSubmitting: boolean
  isValid: boolean
  text?: string
  submittingText?: string
}

const SubmitButton = ({
  isSubmitting,
  isValid,
  text = 'Submit',
  submittingText = 'Submitting...'
}: SubmitButtonProps) => {
  return (
    <Button type="submit" variant="primary" disabled={!isValid || isSubmitting}>
      {isSubmitting ? (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="me-2"
          />
          {submittingText}
        </>
      ) : (
        text
      )}
    </Button>
  )
}

export default SubmitButton
