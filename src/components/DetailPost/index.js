import { Container } from 'react-bootstrap'
import './style.css'

export const DetailPost = ({title, userId, id, body}) => {
  return(
    <Container className='full-post'>
      <h1>{title}</h1>
      <h3>User ID: {userId}</h3>
      <h4>Post Nº{id}</h4>
      <p>{body}</p>
    </Container>
  )
}
