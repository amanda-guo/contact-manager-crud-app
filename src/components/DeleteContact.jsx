import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DeleteContact(props) {
  const { show, onClose, id } = props;

  console.log("contact id");
  console.log(id);

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:5000/contacts/${id}`)
      .then((res) => {
        console.log(res);
        console.log(`Deleted contact with ID ${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
    onClose(true);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => onClose(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="delete-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this contact? {id}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteContact;
