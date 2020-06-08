import React, { ReactElement } from 'react'
import Text from './Text'
import Label from './Label'

type TextLabelArguments = Readonly<{
  id: string;
  value?: string;
  setText?: Function;
  placeholder: string;
  children: string;
  error: boolean;
  register: Function;
}>

export default function TextLabel({
  id,
  placeholder,
  value,
  setText,
  children,
  error,
  register,
}: TextLabelArguments): ReactElement {
  return (
    <>
      <Label inputId={id}>{children}</Label>
      <Text
        id={id}
        value={value}
        setText={setText}
        placeholder={placeholder}
        error={error}
        register={register}
      />
    </>
  )
}
