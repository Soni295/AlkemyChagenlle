import { useHistory } from 'react-router-dom'
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { PATH } from '../../config/PATH'
import './style.css'

export const Post = ({title, id}) => {
  const history = useHistory()
  const HandleDetails = () => {
    history.push('/Post/' + id)
  }

  return(
    <Row className='post'>
      <Col >
        <h2>{title}</h2>
        <ButtonGroup size='lg' aria-label="Basic example">
          <Button>Edit</Button>
          <Button variant="secondary" onClick={HandleDetails}>Details</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </Col>
    </Row>
  )
}
