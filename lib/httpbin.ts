import fetch from 'node-fetch'

type Response = {
  origin: string
}

export async function getIp(): Promise<Response> {
  const url = 'https://httpbin.org/ip'
  const res = await fetch(url)
  return res.json() as Promise<Response>
}
