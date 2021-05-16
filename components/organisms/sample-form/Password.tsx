import React, { ReactElement } from 'react'
import classnames from 'classnames'

type PasswordArguments = Readonly<{
  id: string
  placeholder: string
  error: boolean
  register: Function
}>

export default function Password({
  id,
  placeholder,
  error,
  register,
}: PasswordArguments): ReactElement {
  return (
    <input
      className={classnames(
        'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
        {
          'border-gray-200': !error,
          'border-red-500': error,
        }
      )}
      id={id}
      name={id}
      type="password"
      placeholder={placeholder}
      {...register(id, {
        required: 'This is required',
        minLength: { value: 8, message: 'Input more than 7 characters' },
      })}
    />
  )
}
