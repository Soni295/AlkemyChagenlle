import { EditButton } from '../Buttons/EditButton/index'
import { DetailsButton } from '../Buttons/DetailsButton/index'
import { DeleteButton } from '../Buttons/DeleteButton/index'
import { ButtonGroup, Card } from 'react-bootstrap'
import './style.css'

export const Post = ({title, id, setEditModal}) => {
  return(
    <Card>
      <Card.Body className='post'>
        <Card.Title>{title}</Card.Title>
        <Card.Footer>
          <ButtonGroup aria-label="Basic example">
            <EditButton id={id} setEditModal={setEditModal}/>
            <DetailsButton id={id}/>
            <DeleteButton id={id}/>
          </ButtonGroup>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}
