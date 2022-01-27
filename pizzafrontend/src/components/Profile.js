import React, { useState, useEffect } from "react";
import Nav2 from "./Nav2";
import { Container, Card, Button, Row } from "react-bootstrap";
import { getProfile } from "./config/Myservice";
export default function Profile() {
  let [user, setUser] = useState([]);
  useEffect(() => {
    getProfile(sessionStorage.getItem("user")).then((res) => {
      if (res.data.user) {
        console.log(res.data.user);
        setUser(res.data.user);
      }
    });
  }, []);

  return (
    <>
      <Nav2 />
      <Container>
        <Card style={{ width: 700 }} className="m-5">
          <Card.Body>
            <Card.Title>
              <h2>{user.name}</h2>
            </Card.Title>
            <Card.Subtitle>
              <h3>{user.email}</h3>
            </Card.Subtitle>
            <Card.Text>
              <h4>Mobile: {user.mobile}</h4>
              <h5>Address: {user.address}</h5>
            </Card.Text>
            <Button variant="primary" href="/upd_profile">
              Update profile
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
