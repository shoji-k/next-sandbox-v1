import React, { ReactElement } from 'react'
import Text from './Text'
import Label from './Label'

type TextLabelArguments = Readonly<{
  id: string
  placeholder: string
  children: string
  error: boolean
  register: Function
}>

export default function TextLabel({
  id,
  placeholder,
  children,
  error,
  register,
}: TextLabelArguments): ReactElement {
  return (
    <>
      <Label inputId={id}>{children}</Label>
      <Text
        id={id}
        placeholder={placeholder}
        error={error}
        register={register}
      />
    </>
  )
}
