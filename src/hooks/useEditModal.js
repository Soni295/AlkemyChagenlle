import { useState } from 'react'

const initState = {
  state: true,
  id: '1',
  userID: '03',
  title: 'Hello world',
  body: 'mmmmm'
}

export const useEditModal = () => {
  const [editModal, dispatch] = useState(initState)
  const setEditModal = {

  }

  return {editModal, setEditModal}
}
