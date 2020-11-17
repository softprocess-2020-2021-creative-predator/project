import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const history = useHistory();

  const validateForm = () => {
    let errMessages = [];

    if (!email) {
      errMessages.push("No email entered.");
    }

    if (!password) {
      errMessages.push("No password entered.");
    }

    setErrorMessages(errMessages);

    if (!errMessages.length) {
      history.push("/");
    }
  };

  const hideErrorMessages = () => {
    setErrorMessages([]);
  };

  return (
    <Form className={"mt-4"}>
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

export default LoginForm;
