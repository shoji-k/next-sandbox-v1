import React, { ReactElement } from 'react'

type LabelArguments = Readonly<{
  inputId: string
  children: React.ReactNode
}>

export default function Label({
  inputId,
  children,
}: LabelArguments): ReactElement {
  return (
    <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor={inputId}
    >
      {children}
    </label>
  )
}
