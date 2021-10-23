import fetch from 'node-fetch'
import { user } from '@/lib/firebase/users'

export default async function fetchedJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  return res.json() as Promise<T>
}

export async function fetchPost(
  url: string,
  data: {}
): Promise<{ data: { id: string } }> {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  return res.json() as Promise<{ data: { id: string } }>
}

export async function fetchPut(
  url: string,
  data: {}
): Promise<{ data: { user: user } }> {
  const res = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
  return res.json() as Promise<{ data: { user: user } }>
}

export async function callDelete(url: string) {
  await fetch(url, { method: 'DELETE' })
}
