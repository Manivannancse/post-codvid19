import React from 'react'
import Login from '../component/login'
import { Row, Col } from 'antd';

const LoginContainer = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col span={9} />
      <Col span={6} style={{ background: "#9e9ea47a", padding: 20 }}>
        <Login />
      </Col>
      <Col span={9} />
    </Row>
  )
}

export default LoginContainer; 