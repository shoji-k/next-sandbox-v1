import React, { ReactElement } from 'react'

export const Alert = ({ error }: { error: string|null}): ReactElement => {
  return <p className="text-red-500 text-xs italic">{error}</p>
}
