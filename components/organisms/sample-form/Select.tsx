import React, { ReactElement } from 'react'
import classnames from 'classnames'

type SelectArguments = Readonly<{
  id: string;
  list: string[];
  error: boolean;
  register: Function;
}>

export default function Select({
  id,
  list,
  error,
  register,
}: SelectArguments): ReactElement {
  return (
    <div className="relative">
      <select
        className={classnames('block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
          {
            'border-gray-200': !error,
            'border-red-500': error,
          }
        )}
        id={id}
        name={id}
        ref={register({ required: true })}
      >
        {list.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}
