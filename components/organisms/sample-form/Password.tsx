import React, { ReactElement } from "react"

export default function Password({ id, placeholder }: { id: string; placeholder: string }): ReactElement {
  return (
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={id} type="password" placeholder={placeholder} />
  )
}
