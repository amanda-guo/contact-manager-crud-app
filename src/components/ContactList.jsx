import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import PrimaryButton from "./PrimaryButton";
import Container from "react-bootstrap/Container";
import DeleteContact from "./DeleteContact";
import ViewDetails from "./ViewDetails";
import EditContact from "./EditContact";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const reload = () => window.location.reload();

  const handleShowDelete = (contact) => {
    setShowDelete(true);
    setSelectedContact(contact);
  };
  const handleCloseDelete = (deleted) => {
    setShowDelete(false);
    if (deleted) {
      reload();
    }
  };
  const handleShowDetails = (contact) => {
    setShowDetails(true);
    setSelectedContact(contact);
  };
  const handleCloseDetails = () => setShowDetails(false);
  const handleShowEdit = (contact) => {
    setShowEdit(true);
    setSelectedContact(contact);
  };
  const handleCloseEdit = (edited) => {
    setShowEdit(false);
    if (edited) {
      reload();
    }
  };

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
              contacts.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>
                      <PrimaryButton
                        type="outline-primary"
                        text="View Details"
                        action={() => handleShowDetails(item)}
                      />
                      {showDetails && (
                        <ViewDetails
                          show={showDetails}
                          onClose={handleCloseDetails}
                          contact={selectedContact}
                        />
                      )}
                      <PrimaryButton
                        type="outline-primary"
                        text="Edit"
                        action={() => handleShowEdit(item)}
                      />
                      {showEdit && (
                        <EditContact
                          show={showEdit}
                          onClose={handleCloseEdit}
                          contact={selectedContact}
                        />
                      )}
                      <PrimaryButton
                        type="outline-danger"
                        text="Delete"
                        action={() => handleShowDelete(item)}
                      />
                      {showDelete && (
                        <DeleteContact
                          show={showDelete}
                          onClose={handleCloseDelete}
                          id={selectedContact.id}
                        />
                      )}
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
