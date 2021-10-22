import { NextApiRequest, NextApiResponse } from 'next'

const api = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

export default api
