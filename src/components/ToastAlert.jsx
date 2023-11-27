import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const successAddMssg = "Contact Successfully Added.";
const successEditMssg = "Contact Successfully Updated.";
const successDeleteMssg = "Contact Successfully Deleted.";
const failureMssg = "Failure to be added";

function ToastAlert(props) {
  const { type } = props;
  const [show, setShow] = useState(false);
  const [mssg, setMssg] = useState("");

  if (type === "add") {
    setMssg(successAddMssg);
  } else if (type === "edit") {
    setMssg(successEditMssg);
  } else if (type === "delete") {
    setMssg(successDeleteMssg);
  } else {
    setMssg(failureMssg);
  }

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>{mssg}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default ToastAlert;
