import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Userservice } from "../services/Userservice";

function Userlist() {
  const [state, setstate] = useState({
    users: [],
  });
  useEffect(() => {
    Userservice.getallusers()
      .then((res) => {
        setstate({
          ...state,
          users: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <h3 className="text-primary">User List</h3>
            <p>
              this is some para for user list , sfjhdj ewkhfk uwerh ewjf wfgeg
              trhn erehd
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped border hover className="shadow-lg text-center">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>WEBSITE</th>
                  <th>COMPANY</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                {state.users.length > 0 &&
                  state.users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                        <td>{user.address.city}</td>
                        <td></td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Userlist;
