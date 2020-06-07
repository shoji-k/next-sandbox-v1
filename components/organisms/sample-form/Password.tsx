import React, { ReactElement } from 'react'

export default function Password({
  id,
  value,
  setPassword,
  placeholder,
  register,
}: {
  id: string;
  value: string;
  setPassword: Function;
  placeholder: string;
  register: Function;
}): ReactElement {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }
  return (
    <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id={id}
      name={id}
      type="password"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={register({ required: true, minLength: 6 })}
    />
  )
}
