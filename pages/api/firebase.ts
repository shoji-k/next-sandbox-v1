import { NextApiRequest, NextApiResponse } from 'next'
import firebase from '@/lib/firebase'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const db = firebase.firestore()
  const users = []
  db.collection('users')
    .orderBy('first', 'asc')
    .limit(10)
    .get()
    .then(function (snapshot) {
      if (!snapshot.size) {
        return
      }
      snapshot.forEach((doc) => {
        const user = doc.data()
        users.push(user)
      })
      res.statusCode = 200
      res.json({ users: users })
    }).catch(function(e) {
      console.log(e)
      res.statusCode = 500
      res.json({ errors: [] })
    })
}
