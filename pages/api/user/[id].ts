import { NextApiRequest, NextApiResponse } from 'next'
import { update, remove } from '@/lib/firebaseDatabase'

const updateData = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { query: { id } } = req
  const params = JSON.parse(req.body)

  try {
    const user = await update({ ...params, id })
    res.statusCode = 200
    res.json({ data: { user: user } })
  } catch (e) {
    res.statusCode = 500
    console.log(e)
    res.json({ errors: ['update error', e.message] })
  }
}
const deleteData = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { query: { id } } = req

  try {
    const removedId = await remove(id)
    res.statusCode = 200
    res.json({ data: { id: removedId } })
  } catch (e) {
    res.statusCode = 500
    console.log(e)
    res.json({ errors: ['delete error', e.message] })
  }
}

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'PUT') {
    return await updateData(req, res)
  }
  if (req.method === 'DELETE') {
    return await deleteData(req, res)
  }

  res.setHeader('Allow', ['DELETE'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}