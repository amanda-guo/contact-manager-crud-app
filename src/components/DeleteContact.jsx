import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// CURRENTLY DOING THIS!!!!!!!
// https://stackoverflow.com/questions/64955887/how-can-i-open-a-rect-bootstrap-modal-dialog-from-another-component

function DeleteContact(props) {
  const { show, onClose } = props;

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteContact;