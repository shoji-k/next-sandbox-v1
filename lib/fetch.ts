import fetch from 'node-fetch'

/* eslint @typescript-eslint/no-explicit-any: 0 */
export default async function fetchedJson(url: string): Promise<any> {
  const res = await fetch(url)
  return res.json()
}
