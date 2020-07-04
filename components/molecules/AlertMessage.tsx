import React, { ReactElement } from 'react'
import { ErrorMessage, NestDataObject, FieldError } from 'react-hook-form'
import { Alert } from '../atoms/Alert'

type AlertMessageArguments = Readonly<{ errors: NestDataObject<FormData, FieldError>, name: string}>
export const AlertMessage = ({ errors, name }: AlertMessageArguments): ReactElement => {
  return (<ErrorMessage errors={errors} name={name}>
    {({ message }: { message: string }): ReactElement => (
      <Alert>{message}</Alert>
    )}
  </ErrorMessage>)
}
