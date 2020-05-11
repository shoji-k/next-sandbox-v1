import fetch from 'node-fetch'

export default async function (...args) {
  const res = await fetch(...args)
  return res.json()
}