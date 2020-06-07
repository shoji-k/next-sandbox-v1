import React, { ReactElement } from 'react'
import classnames from 'classnames'

export default function Input({
  id,
  value,
  setText,
  placeholder,
  error,
  register,
}: {
  id: string;
  value?: string;
  setText?: Function;
  placeholder: string;
  error?: string;
  register: Function;
}): ReactElement {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }
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
      {error !== undefined && (
        <p className="text-red-500 text-xs italic">{error}</p>
      )}
    </>
  )
}
