import React, { ReactElement } from 'react'

type AlertArguments = Readonly<{ children: React.ReactNode }>
export const Alert = ({ children }: AlertArguments): ReactElement => {
  return <p className="text-red-500 text-xs italic">{children}</p>
}
