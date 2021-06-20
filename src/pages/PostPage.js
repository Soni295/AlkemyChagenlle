import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DetailPost } from '../components/DetailPost/index'
import { JPHApi } from '../config/Apis'

export const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    JPHApi
      .get(id)
      .then(res => setPost(res.data))
  }, [])

  return post ? <DetailPost {...post} /> : <></>
}
