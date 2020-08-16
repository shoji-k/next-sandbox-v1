import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse): void => {
  // console.log(req)
  if (req.method === 'POST') {
    // let req save data
    res.statusCode = 201
    res.json({ result: "ok" })
  } else {
    res.status(401).json({ message: 'Authentication failed'})
  }
}
