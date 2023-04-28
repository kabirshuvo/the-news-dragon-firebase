import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <>
            <Container>
      <h1>Login</h1>
      <Form 
    //   onSubmit={handleSubmit}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            // value={email}
            // onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
        </>
    );
};

export default Login;