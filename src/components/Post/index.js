import { Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import './style.css'

export const Post = ({title}) => {

  return(
    <Row className='post'>
      <Col >
        <h2>{title}</h2>
        <ButtonGroup size='lg' aria-label="Basic example">
          <Button >Edit</Button>
          <Button variant="secondary">Details</Button>
          <Button variant="secondary">Delete</Button>
        </ButtonGroup>
      </Col>
    </Row>
  )
}
