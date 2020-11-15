import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const validateForm = () => {
    let errMessages = [];

    if (!firstName) {
      errMessages.push("No first name entered.");
    }

    if (!lastName) {
      errMessages.push("No last name entered.");
    }

    if (!email) {
      errMessages.push("No email entered.");
    }

    if (!password) {
      errMessages.push("No password entered.");
    }

    setErrorMessages(errMessages);
  };

  const hideErrorMessages = () => {
    setErrorMessages([]);
  };

  return (
    <Form>
      {errorMessages.length > 0 && (
        <Alert variant="danger">
          {errorMessages.map((errorMessage) => (
            <>
              - {errorMessage}
              <br />
            </>
          ))}
        </Alert>
      )}

      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(event) => {
            hideErrorMessages();
            setFirstName(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(event) => {
            hideErrorMessages();
            setLastName(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => {
            hideErrorMessages();
            setEmail(event.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            hideErrorMessages();
            setPassword(event.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" onClick={validateForm}>
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
