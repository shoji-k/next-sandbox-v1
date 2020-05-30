import React, { ReactElement } from "react"

export default function Label({ inputId, children }: { inputId: string; children: React.ReactNode }): ReactElement {
  return (
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={inputId}>
      {children}
    </label>
  )
}
