import { createPortal } from 'react-dom'
import { Modal, Button } from 'react-bootstrap'

export const AlertModal = ({modal, setModal}) => {
  return createPortal(
    <Modal centered show={modal.state} onHide={setModal.hide}>
      <Modal.Header closeButton>
        <Modal.Title>{modal.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modal.msg}</Modal.Body>
      <Modal.Footer>
        <Button onClick={setModal.hide}>Close</Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById('modal')
  )
}
