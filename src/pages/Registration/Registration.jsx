import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Registration = () => {
  return (
    <>
      <Container>
      <h1>Registration</h1>
      <Form 
    //   onSubmit={handleSubmit}
      >
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            // onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            // onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            // onChange={handlePasswordChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Re-enter Password"
            value={confirmPassword}
            // onChange={handleConfirmPasswordChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
    </>
  );
};

export default Registration;
