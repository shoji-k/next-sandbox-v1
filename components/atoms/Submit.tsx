import React, { ReactElement } from 'react'

export const Submit = (): ReactElement => {
  return (
    <input
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      value="Save"
    />
  )
}
