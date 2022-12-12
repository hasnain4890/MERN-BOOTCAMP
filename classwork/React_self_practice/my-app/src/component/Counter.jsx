import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
//import Button from "../../../../19_nov_2022/1st_app/src/3_12_2022/bootstrap_form/Button";

function Counter() {
  const [state, setstate] = useState({
    count: 0,
  });
  const increment = () => {
    console.log(state);
    setstate({
      count: state.count + 1,
    });
  };
  const decrement = () => {
    console.log(state);
    setstate({
      count: state.count - 1,
    });
  };
  return (
    <div>
      <Container className="p-4">
        <Row>
          <Col xs={6}>
            <Card className="shadow-lg">
              <Card.Body>
                <p className="display-2">{state.count}</p>
                <Button variant="success" className="m-2" onClick={increment}>
                  incremnet
                </Button>
                <Button onClick={decrement}>decrement</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Counter;
