import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import PrimaryButton from "./PrimaryButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AddContact.css";

function AddContact() {
  let navigate = useNavigate();
  const path = `/`;
  const userMssg = {
    status: "success",
    type: "add",
  };
  const routeChange = () => {
    navigate(path, { state: userMssg });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/contacts/", data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        reset();
        routeChange();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <h1>Add a Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label>First Name</label>
            <br></br>
            <input
              type="text"
              name="firstName"
              {...register("firstName", {
                required: "First Name is required.",
              })}
            />
            {errors.firstName && (
              <p className="errorMsg">{errors.firstName.message}</p>
            )}
          </div>
          <div className="form-control">
            <label>Last Name</label>
            <br></br>
            <input
              type="text"
              name="lastName"
              {...register("lastName", {
                required: "Last Name is required.",
              })}
            />
            {errors.lastName && (
              <p className="errorMsg">{errors.lastName.message}</p>
            )}
          </div>
          <div className="form-control">
            <label>Phone Number</label>
            <br></br>
            <input
              type="tel"
              name="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone Number is required.",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message:
                    "Phone number is not valid. Please enter 10 digits with no other characters.",
                },
              })}
            />
            {errors.phoneNumber && (
              <p className="errorMsg">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="form-control">
            <label>Email</label>
            <br></br>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </div>
          <div className="form-control">
            <label>Address</label>
            <br></br>
            <input
              type="text"
              name="address"
              {...register("address", {
                required: "Address is required.",
              })}
            />
            {errors.address && (
              <p className="errorMsg">{errors.address.message}</p>
            )}
          </div>
          <Row>
            <Col className="d-flex justify-content-start">
              <PrimaryButton type="secondary" text="Back" link="/" />
            </Col>
            <Col className="d-flex justify-content-end">
              <div className="form-control">
                <Button type="submit" variant="primary">
                  Add Contact
                </Button>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
}

export default AddContact;
