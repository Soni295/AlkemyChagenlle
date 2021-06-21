import { EditButton } from '../Buttons/EditButton/index'
import { DetailsButton } from '../Buttons/DetailsButton/index'
import { DeleteButton } from '../Buttons/DeleteButton/index'
import { Row, Col, ButtonGroup } from 'react-bootstrap'
import './style.css'

export const Post = ({title, id}) => {
  return(
    <Row className='post'>
      <Col >
        <h2>{title}</h2>
        <ButtonGroup size='lg' aria-label="Basic example">
          <EditButton/>
          <DetailsButton id={id}/>
          <DeleteButton id={id}/>
        </ButtonGroup>
      </Col>
    </Row>
  )
}
