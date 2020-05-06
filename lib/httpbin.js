import fetch from 'node-fetch'

export async function getIp() {
  const url = 'https://httpbin.org/ip'
  const res = await fetch(url)
  console.log(res)
  return res.json()
}
