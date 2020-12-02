import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CreateRecipeForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const history = useHistory();

  const validateForm = () => {
    let errMessages = [];

    if (!title) {
      errMessages.push("No first name entered.");
    }

    if (!description) {
      errMessages.push("No last name entered.");
    }

    if (!author) {
      errMessages.push("No author entered.");
    }

    setErrorMessages(errMessages);

    if (!errMessages.length) {
      history.push("/login");
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

      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(event) => {
            hideErrorMessages();
            setTitle(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(event) => {
            hideErrorMessages();
            setDescription(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="author">
        <Form.Label>Author address</Form.Label>
        <Form.Control
          type="author"
          placeholder="Enter author"
          value={author}
          onChange={(event) => {
            hideErrorMessages();
            setAuthor(event.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" onClick={validateForm}>
        Submit
      </Button>
    </Form>
  );
};

export default CreateRecipeForm;
