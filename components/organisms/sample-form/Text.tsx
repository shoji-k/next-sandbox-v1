import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'

export default function Input({
  id,
  value,
  setText,
  placeholder,
  error,
}: {
  id: string;
  value?: string;
  setText?: Function;
  placeholder: string;
  error?: string;
}): ReactElement {
  const { register, errors } = useForm<FormData>()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }
  console.log(errors)
  return (
    <>
      <input
        className={classnames(
          'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
          {
            'border-gray-200': error === undefined,
            'border-red-500': error !== undefined,
          }
        )}
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={register({ required: true })}
      />
      {errors[id] && (
        <p className="text-red-500 text-xs italic">Input proper value</p>
      )}
      {error !== undefined && (
        <p className="text-red-500 text-xs italic">{error}</p>
      )}
    </>
  )
}
