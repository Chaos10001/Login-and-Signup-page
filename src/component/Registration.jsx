import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Registration = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    if (!name || !userName || !password) {
      return toast.warning("Please Fill In All Fields");
    }

    const data = {
      id: new Date().getTime(),
      name,
      userName,
      password,
      confirmPassword,
    };
    dispatch({
      type: "REGISTER",
      payload: data,
    });
    toast.success("Successfully Registered");
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="p-5" onSubmit={submitHandler}>
      <Row>
        <Col md={6} className="mx-auto shadow-lg text-center">
          <Form>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="true"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="true"
              />
            </Form.Group>
            <Form.Group>
              <Button variant="dark" className="btn-block" onClick={register}>
                Register
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
