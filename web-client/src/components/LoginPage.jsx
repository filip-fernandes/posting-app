import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { login } from '../utils/api';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    Cookies.get('token') ? setLoggedIn(true) : setLoggedIn(false);
  }, [navigate])

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await login(email, password)) {
      setShowError(false);
      console.log('Login successful');
      return navigate('/');
    } else {
      setShowError(true);
      console.log('Login failed');
    }
  }

  const loginForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{marginTop: '10px'}}>
          Login
        </Button>
        <p style={{ marginTop: '20px' }}>Have no account? <a href='/sign-up'>Sign up for free</a>.</p>
      </Form>
    )
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Login</h2>
          {showError &&
            <Alert variant="danger">
              Invalid email or password.
            </Alert>
          }
          {loggedIn? <p>You are alredy logged in.</p> : loginForm()}
        </Col>
      </Row>
    </Container>
  );
}