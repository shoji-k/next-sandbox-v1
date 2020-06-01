import React, { ReactElement } from "react"
import Text from './Text'
import Label from './Label'

export default function Input({ id, placeholder, value, setText, children, error }: { id: string; value?: string; setText?: Function; placeholder: string; children: string; error?: string }): ReactElement {
  return (
    <>
      <Label inputId={id}>{children}</Label>
      <Text id={id} value={value} setText={setText} placeholder={placeholder} error={error} />
    </>
  )
}
