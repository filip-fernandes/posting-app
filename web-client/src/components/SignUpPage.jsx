import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { signUp, login } from '../utils/api';
import { useNavigate } from 'react-router-dom';


export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await signUp(username, email, password)) {
      await login(email, password)
      setShowError(false);
      console.log('Signup successful');
      navigate('/');
    } else {
      // Passwords do not match
      setShowError(true);
      console.log('Passwords do not match');
    }
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Signup</h2>
          {showError &&
            <Alert variant="danger">
              Username or Email already in use.
            </Alert>
          }
          <Form onSubmit={handleSubmit}>

            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username </Form.Label>
              <Form.Control type="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" style={{marginTop: '10px'}}>
              Signup
            </Button>
            
            <p style={{ marginTop: '20px' }}>Already have an account? <a href='/login'>Login</a>.</p>

          </Form>
        </Col>
      </Row>
    </Container>
  )
};