import React, { ReactElement } from 'react'
import { user } from '@/lib/firebase'

export default function UserList({ users }: { users: user[] }): ReactElement {
  return (
    <ul className="flex flex-wrap mt-8 text-center">
      {users.map(({ id, first, middle, last, born }) => (
        <li className="w-full" key={id}>
          {first} {middle} {last} {born}
        </li>
      ))}
    </ul>
  )
}
