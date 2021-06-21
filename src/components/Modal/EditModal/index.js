import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import { createPortal } from 'react-dom'
import { inputs } from './inputs'
import { Input } from '../../FormInput/index'

export const EditModal = ({modal, setModal, formik}) => {
  console.log(formik.values)
  const BodyPost = ({name, placeholder, type, control}) => (
    <InputGroup>
      <InputGroup.Prepend>
      </InputGroup.Prepend>
      <FormControl
        data-testid={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={control.handleChange}
        value={control.values[name]}
        onBlur={control.handleBlur}
        as="textarea" aria-label="With textarea" />
    </InputGroup>
  )

  return createPortal(
    <Modal size="lg" centered show={modal.show} onHide={setModal.close}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Post Nº {modal.data.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {inputs.map(input =>
          <Input {...input} key={input.name} control={formik}/>
        )}
        <BodyPost
          name='body'
          type='text'
          placeholder=''
          control={formik}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={setModal.close}>Close</Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById('modal')
  )
}
