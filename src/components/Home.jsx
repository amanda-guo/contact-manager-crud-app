import React from "react";
import { useLocation } from "react-router-dom";
import ContactList from "./ContactList";
import PrimaryButton from "./PrimaryButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToastAlert from "./ToastAlert";

// TODO: error with the toast message displaying - too many rerenders...

function Home() {
  const location = useLocation();
  const mssg = location.state;
  console.log("mssg");
  console.log(mssg);
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
            {/* {mssg && mssg.status === "success" && (
              <ToastAlert type={mssg.type} />
            )} */}
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
