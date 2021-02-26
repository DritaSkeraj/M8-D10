import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import backend from "../../clients/axios";
import { Link, useHistory } from "react-router-dom";
const Register = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await backend.post("/users", credentials);
      window.location.replace("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h5 style={{ marginBottom: 50 }}>Register to Users App</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={credentials.email}
            onChange={handleChange}
            type="email"
            required
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={credentials.password}
            onChange={handleChange}
            type="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Button block variant="primary" type="submit">
          Submit
        </Button>
        <Form.Group>
          <Link to={"/auth/login"}>Already have an account ? Login </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;