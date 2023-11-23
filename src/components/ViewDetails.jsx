import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// BUG HERE WHERE I CAN'T SEEM TO GET THE ID. Maybe separate the contact out into its own component (check capco thing)

function ViewDetails(props) {
  const { show, onClose, contact } = props;
  console.log("contact dets");
  console.log(contact);

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
          <Modal.Title>View Contact {contact?.id} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Text to be added {contact}</Modal.Body>
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
