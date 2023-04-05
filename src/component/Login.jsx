import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const Login = () => {
    const payload = users.find(
      (user) => user.userName === userName && user.password === password
    );
    if (payload) {
      dispatch({
        type: "LOGIN",
        payload,
      });
      toast.success("Login Successful");
    } else {
      toast.error("wrong credentials");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container className="p-5" onSubmit={submitHandler}>
        <Row>
          <Col md={6} className="mx-auto shadow-lg text-center">
            <Form>
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
                <Button
                  variant="dark"
                  className="btn-block"
                  type="Register"
                  onClick={Login}>
                  Login
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
