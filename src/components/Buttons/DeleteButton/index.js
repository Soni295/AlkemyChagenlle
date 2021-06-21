import { Button } from 'react-bootstrap'

export const DeleteButton = ({id}) => {
  const handleDelete = () => console.log('delete')

  return <Button variant='danger' onClick={handleDelete}>Delete</Button>
}
