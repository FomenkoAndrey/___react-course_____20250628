import { Col, Container, Row } from 'react-bootstrap'
import RegistrationForm from './components/RegistrationForm'

const App = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <RegistrationForm />
        </Col>
      </Row>
    </Container>
  )
}

export default App
