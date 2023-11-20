import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import PrimaryButton from "./PrimaryButton";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./AddContact.css";
import FormExample from "./FormExample";

function AddContact() {
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/contacts/", data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSuccessMsg("Contact added successfully.");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <FormExample />
      <Container>
        <Form>
          <h1>Add a Contact</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {successMsg && <p className="success-msg">{successMsg}</p>}
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                // <Form.Group
                //   {...field}
                //   className="mb-3"
                //   controlId="formBasicText"
                // >
                //   <Form.Label>First Name</Form.Label>
                //   <Form.Control
                //     required
                //     type="text"
                //     placeholder="Enter first name"
                //   />
                // </Form.Group>
                <Form.Group
                  {...field}
                  as={Col}
                  md="4"
                  controlId="validationCustomFirstName"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter first name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter a first name.
                  </Form.Control.Feedback>
                </Form.Group>
              )}
            />
            {/* <div className="form-control">
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
            </div> */}
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
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
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
            <div className="form-control">
              <button type="submit">Add</button>
            </div>
          </form>
          <PrimaryButton type="outline-primary" text="Back" link="/" />
        </Form>
      </Container>
    </>
  );
}

export default AddContact;
