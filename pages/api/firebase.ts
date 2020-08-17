import { NextApiRequest, NextApiResponse } from 'next'
import firebase from '@/lib/firebase'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const db = firebase.firestore()
  return new Promise((resolve, reject) => {
    db.collection('users')
      .orderBy('first', 'asc')
      .limit(10)
      .get()
      .then(function (snapshot) {
        const users = []
        snapshot.forEach((doc) => {
          const user = doc.data()
          users.push({ id: doc.id, ...user })
        })
        res.statusCode = 200
        res.json({ users: users })
        resolve()
      }).catch(function(e) {
        console.log(e)
        res.statusCode = 500
        res.json({ errors: [] })
        reject()
      })
  })
}
