import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import axios from "axios";

// Todo: outstanding bug of extra key (contact's id) being added to the data after an update/patch request

function EditContact(props) {
  const { show, onClose, contact } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: "",
    },
  });

  useEffect(() => {
    let defaults = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      address: contact.address,
    };
    reset(defaults);
  }, [contact, reset]);

  const onSave = (data) => {
    axios
      .patch(`http://localhost:5000/contacts/${contact.id}`, data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        reset();
        onClose(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="edit-contact-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact ID #{contact.id}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSave)}>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => onClose(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default EditContact;
