import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'POST') {
    // let req save data

    res.statusCode = 201
    const body = JSON.parse(req.body)
    res.json({ result: 'ok', body })
  } else {
    res.status(401).json({ message: 'Authentication failed' })
  }
}
