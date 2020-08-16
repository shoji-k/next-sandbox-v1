import fetch from 'node-fetch'

/* eslint @typescript-eslint/no-explicit-any: 0 */
export default async function fetchedJson(url: string): Promise<any> {
  const res = await fetch(url)
  return res.json()
}

export async function fetchPost(url: string, data: {}): Promise<void> {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
