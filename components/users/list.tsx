import React, { ReactElement } from 'react'
import { callDelete } from '@/lib/fetch'
import { user } from '@/lib/firebaseDatabase'

type deleteUser = (id: string) => void

export default function UserList({
  users,
  deleteUser,
  startDeleting,
}: {
  users: user[]
  deleteUser: deleteUser
  startDeleting: (id: string) => void
}): ReactElement {
  const click = async (id: string): void => {
    try {
      startDeleting(id)
      await callDelete(`/api/user/${id}`)
      deleteUser(id)
    } catch (e) {
      console.log(e)
      alert('Delete errors happen')
    }
  }

  return (
    <ul className="flex flex-wrap mt-8 text-center">
      {users.map(({ id, first, middle, last, born, deleting }) => {
        if (deleting) {
          return (
            <li className="w-full" key={id}>
              deleting...
            </li>
          )
        }
        return (
          <li className="w-full" key={id} onClick={(): void => click(id)}>
            {first} {middle} {last} {born}
          </li>
        )
      })}
    </ul>
  )
}
