import React, { ReactElement } from 'react'
import useSWR, { Fetcher } from 'swr'

type IPData = { origin: string }
const fetcher: Fetcher<IPData> = (url: string) => fetch(url).then(res => res.json())

export default function Ip(): ReactElement {
  const url = 'https://httpbin.org/ip'
  const { data, error } = useSWR<IPData>(url, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>Your ip address is {data.origin}!</div>
}
