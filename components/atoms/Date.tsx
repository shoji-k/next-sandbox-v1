import React, { ReactElement } from 'react'
import { parseISO, format } from 'date-fns'

export default function Date({
  dateString,
}: {
  dateString: string
}): ReactElement {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
