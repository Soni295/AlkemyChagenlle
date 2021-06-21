import { Button } from 'react-bootstrap'
import { JPHApi } from '../../../config/Apis'

export const EditButton = ({id, setEditModal}) =>{
  const handleEditButton = () => {
    JPHApi
      .get('/' + id)
      .then(res => setEditModal.success(res.data))
  }
  return <Button onClick={handleEditButton}>Edit</Button>
}
