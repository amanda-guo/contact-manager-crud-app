import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function PrimaryButton({ type, text, link }) {
  let navigate = useNavigate();
  let path = link;
  const routeChange = () => {
    navigate(path);
  };

  return (
    <>
      <Button variant={type} onClick={routeChange}>
        {text}
      </Button>{" "}
    </>
  );
}

export default PrimaryButton;
