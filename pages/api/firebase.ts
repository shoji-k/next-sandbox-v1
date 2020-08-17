import { NextApiRequest, NextApiResponse } from 'next'
import { load, create } from '@/lib/firebase'

const get = (_req: NextApiRequest, res: NextApiResponse): void => {
  try {
    const users = load()
    res.statusCode = 200
    res.json({ users: users })
  } catch (e) {
    res.statusCode = 500
    res.json({ errors: ['load error'] })
  }
}

const post = (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    const params = JSON.parse(req.body)
    const user = create(params)
    res.statusCode = 200
    res.json({ data: user })
  } catch (e) {
    res.statusCode = 500
    console.log(e)
    res.json({ errors: ['post error'] })
  }
}

// this codes are for debug to call firebase store api
export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method === 'POST') {
    await post(req, res)
    return
  }
  await get(req, res)
}
