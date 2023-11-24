import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ViewDetails(props) {
  const { show, onClose, contact } = props;

  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="view-details-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>View Contact ID #{contact.id} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            {contact.firstName} {contact.lastName}
          </h4>
          <h5>{contact.phoneNumber}</h5>
          <h5>{contact.email}</h5>
          <h5>{contact.address}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewDetails;
