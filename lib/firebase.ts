import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  appId: process.env.APP_ID,
}
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
export default app

export type user = {
  first?: string
  middle?: string
  last?: string
  born?: string
}

export const load = (): Promise<user[] | string> => {
  return new Promise((resolve, reject) => {
    const db = app.firestore()
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
        resolve(users)
      })
      .catch(function (e) {
        console.log(e)
        reject(e.message)
      })
  })
}

export const post = (user: user): Promise<void> => {
  console.log('post', user)
  const db = app.firestore()
  db.collection('users')
    .add(user)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
      throw error
    })
}
