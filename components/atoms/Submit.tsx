import React, { ReactElement } from 'react'
import classnames from 'classnames'

export const Submit = ({ disabled }: { disabled: boolean}): ReactElement => {
  return (
    <input
      className={classnames('bg-blue-500 text-white font-bold py-2 px-4 rounded',
      {
        'opacity-50': disabled,
        'cursor-not-allowed': disabled,
        'hover:bg-blue-700': !disabled,
        'focus:outline-none': !disabled,
        'focus:shadow-outline': !disabled
      }
      )}
      type="submit"
      value="Save"
    />
  )
}

Submit.defauntProps = {
  disabled: false
}
