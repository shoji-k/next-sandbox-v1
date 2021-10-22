import { NextApiRequest, NextApiResponse } from 'next'
import { load, create } from '@/lib/firebase/users'

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

const post = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const params = JSON.parse(req.body)
    const id = await create(params)
    res.statusCode = 200
    res.json({ data: { id: id } })
  } catch (e) {
    res.statusCode = 500
    console.log(e)
    res.json({ errors: ['post error', e.message] })
  }
}

// this codes are for debug to call firebase store api
async function api(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    return await post(req, res)
  }
  return await get(req, res)
}

export default api
