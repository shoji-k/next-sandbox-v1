import React, { ReactElement } from 'react'
import { ErrorMessage } from 'react-hook-form'
import { Alert } from '../atoms/Alert'

type AlertMessageArguments = Readonly<{ errors: string[], name: string}>
export const AlertMessage = ({ errors, name }: AlertMessageArguments): React.ReactElement => {
  return (<ErrorMessage errors={errors} name={name}>
    {({ message }: { message: string }): React.ReactElement => (
      <Alert>{message}</Alert>
    )}
  </ErrorMessage>)
}
