import fetch from 'node-fetch'

/* eslint @typescript-eslint/no-explicit-any: 0 */
export default async function (...args): Promise<any> {
  const res = await fetch(...args)
  return res.json()
}
