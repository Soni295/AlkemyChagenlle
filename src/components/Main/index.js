import { useEffect } from 'react'
//import { JPHApi } from '../../config/Apis'

import { Container } from 'react-bootstrap'
import { PostReducer } from '../../reducer/PostReducer/PostReducer'

import data from '../../config/example.json'

import { Post } from '../Post/index'

export const Main = () => {
  const {postsState, dispatch} = PostReducer()

  useEffect(() => {
    dispatch.loading()
    /*
    JPHApi
      .get('')
      .then(res => console.log(res.data))
    */

    dispatch.getPostsSucess(data)
  }, [])

  console.log(postsState)
  return (
    <Container fluid>
      {postsState.posts.map(publication =>
        <Post
          key={publication.title + publication.userId}
          {...publication}
        />
      )}
    </Container>
  )
}
