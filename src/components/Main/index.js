import { Container } from 'react-bootstrap'
import { useLogic } from './logic'

import { Post } from '../Post/index'
import { AlertModal } from '../Modal/AlertModal/index'
import { EditModal } from '../Modal/EditModal/index'
import './style.css'

export const Main = () => {
  const {modal, setModal, posts, editPost, setEditPost, formik} = useLogic()
  return (<>
    <AlertModal
      modal={modal}
      setModal={setModal}
    />
    <EditModal
      modal={editPost}
      setModal={setEditPost}
      formik={formik}
    />
    <Container fluid className='main'>
      {posts.map(publication =>
        <Post
          key={publication.title + publication.userId}
          setEditModal={setEditPost}
          {...publication}
        />
      )}
    </Container>
  </>)
}
