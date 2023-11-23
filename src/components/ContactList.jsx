import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import PrimaryButton from "./PrimaryButton";
import Container from "react-bootstrap/Container";
import DeleteContact from "./DeleteContact";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/contacts/")
      .then((data) => {
        setContacts(data?.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {!error &&
              contacts.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{item?.firstName}</td>
                    <td>{item?.lastName}</td>
                    <td>{item?.phoneNumber}</td>
                    <td>{item?.email}</td>
                    <td>{item?.address}</td>
                    <td>
                      <PrimaryButton
                        type="outline-primary"
                        text="View Details"
                        link="/"
                      />
                      <PrimaryButton
                        type="outline-primary"
                        text="Edit"
                        link="/"
                      />
                      <PrimaryButton
                        type="outline-danger"
                        text="Delete"
                        action={handleShow}
                      />
                      <DeleteContact show={show} onClose={handleClose} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default ContactList;
