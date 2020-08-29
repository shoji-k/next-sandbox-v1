import React, { ReactElement } from 'react'

export const Clear = ({ onClick }: { onClick: () => void }): ReactElement => {
  return (
    <button
      type="button"
      className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      Clear
    </button>
  )
}
