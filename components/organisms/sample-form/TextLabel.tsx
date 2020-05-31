import React, { ReactElement } from "react"
import Text from './Text'
import Label from './Label'

export default function Input({ id, placeholder, children, error }: { id: string; placeholder: string; children: string; error?: string }): ReactElement {
  return (
    <>
      <Label inputId={id}>{children}</Label>
      <Text id={id} placeholder={placeholder} error={error} />
    </>
  )
}
