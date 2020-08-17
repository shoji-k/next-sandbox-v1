import { NextApiRequest, NextApiResponse } from 'next'
import { load } from '@/lib/firebase'

// this codes are for debug to call firebase store api
export default async function (_req: NextApiRequest, res: NextApiResponse): void {
  try {
    const users = await load()
    res.statusCode = 200
    res.json({ users: users })
  } catch (e) {
    res.statusCode = 500
    res.json({ errors: [] })
  }
}
