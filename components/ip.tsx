import React, { ReactElement } from "react"
import useSWR from 'swr'
import fetch from '../lib/fetch'

export default function Ip(): ReactElement {
  const url = 'https://httpbin.org/ip'
  const { data, error } = useSWR(url, fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>Your ip address is {data.origin}!</div>
}