// SigninScreen.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Store } from '../Store';  // Import the Store context

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useContext(Store);  // Get the dispatch function from the Store

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signin', {
        email,
        password,
      });
      const userInfo = response.data;
      console.log(userInfo);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      dispatch({ type: 'USER_SIGNIN', payload: userInfo });  // Dispatch the user information to the global state
      navigate('/'); // Redirect to home page after signin
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Sign In</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Sign In
        </Button>
      </Form>
    </Container>
  );
}

export default Signin;
