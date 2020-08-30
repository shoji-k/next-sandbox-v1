import React, { ReactElement } from 'react'
import { callDelete } from '@/lib/fetch'
import { user } from '@/lib/firebase/users'

type userFunction = (id: string) => void

export default function UserList({
  users,
  selectUser,
  deleteUser,
  startDeleting,
}: {
  users: user[]
  selectUser: userFunction
  deleteUser: userFunction
  startDeleting: userFunction
}): ReactElement {
  const click = async (id: string): void => {
    selectUser(id)
  }
  const clickDelete = async (id: string): void => {
    try {
      startDeleting(id)
      await callDelete(`/api/users/${id}`)
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
            {first} {middle} {last} {born}{' '}
            <a
              className="text-yellow-500"
              onClick={(): void => clickDelete(id)}
            >
              delete
            </a>
          </li>
        )
      })}
    </ul>
  )
}
