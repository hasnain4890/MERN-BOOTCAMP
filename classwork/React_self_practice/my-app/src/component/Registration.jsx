import React, { useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";

function Registration() {
  const [state, setstate] = useState({
    user: {
      username: "",
      email: "",
      password: "",
    },
  });
  const handleinput = (e) => {
    console.log(state);
    setstate({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(state.user);
  };
  return (
    <>
      <pre>{JSON.stringify(state)}</pre>
      <Container className="m-3">
        <Row>
          <Col xs={4}>
            <Card className="shadow-lg">
              <Card.Header className="p-3" style={{ background: "orange" }}>
                <h4>Registration</h4>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Control
                      onChange={handleinput}
                      className="p-2 mb-3"
                      type="text"
                      placeholder="username"
                      name="username"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      name="email"
                      onChange={handleinput}
                      className="p-2 mb-3"
                      type="text"
                      placeholder="email"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      name="password"
                      onChange={handleinput}
                      className="p-2 mb-3"
                      type="text"
                      placeholder="password"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Button onClick={handlesubmit} type="submit">
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Registration;
