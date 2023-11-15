import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function PrimaryButton({ text }) {
  return (
    <>
      <Button variant="outline-primary">{text}</Button>{" "}
    </>
  );
}

export default PrimaryButton;
