import fetch from 'node-fetch'
import { user } from '@/lib/firebase/users'

/* eslint @typescript-eslint/no-explicit-any: 0 */
export default async function fetchedJson(url: string): Promise<unknown> {
  const res = await fetch(url)
  return res.json()
}

export async function fetchPost(
  url: string,
  data: {}
): Promise<{ data: { id: string } }> {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  return res.json()
}

export async function fetchPut(
  url: string,
  data: {}
): Promise<{ data: { user: user } }> {
  const res = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
  return res.json()
}

export async function callDelete(url: string): Promise<{ void }> {
  const res = await fetch(url, { method: 'DELETE' })
  return res.json()
}
