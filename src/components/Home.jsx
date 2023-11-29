import React from "react";
import ContactList from "./ContactList";
import PrimaryButton from "./PrimaryButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col className="d-flex justify-content-start">
            <h1>Contacts</h1>
          </Col>
          <Col className="d-flex justify-content-end">
            <PrimaryButton
              type="outline-primary"
              text="Add Contact"
              link="/addcontact"
            />
          </Col>
        </Row>
        <Row>
          <ContactList />
        </Row>
      </Container>
    </>
  );
}

export default Home;
