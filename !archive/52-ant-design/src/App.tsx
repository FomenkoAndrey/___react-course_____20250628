import React from 'react'
import { Col, Row } from 'antd'

const App: React.FC = () => (
  <>
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        col
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        col-12
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        col-12
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        col-8
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        col-8
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={12} md={6} lg={6} xl={6}>
        col-6
      </Col>
      <Col xs={24} sm={12} md={6} lg={6} xl={6}>
        col-6
      </Col>
      <Col xs={24} sm={12} md={6} lg={6} xl={6}>
        col-6
      </Col>
      <Col xs={24} sm={12} md={6} lg={6} xl={6}>
        col-6
      </Col>
    </Row>
  </>
)

export default App
