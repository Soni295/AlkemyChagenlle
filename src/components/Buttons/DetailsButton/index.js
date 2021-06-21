import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export const DetailsButton = ({id}) => {
  const history = useHistory()
  const handleDetails = () => history.push('/Post/' + id)

  return <Button variant='secondary' onClick={handleDetails}>Details</Button>
}
