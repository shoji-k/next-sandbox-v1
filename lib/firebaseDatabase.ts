import firebase from '@/lib/firebase'

export type user = {
  id?: number,
  first?: string
  middle?: string
  last?: string
  born?: string
}

export const load = (): Promise<user[] | string> => {
  return new Promise((resolve, reject) => {
    const db = firebase.firestore()
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

export const create = (user: user): Promise<string> => {
  return new Promise((resolve, reject) => {
    const db = firebase.firestore()
    db.collection('users')
      .add(user)
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
        resolve(docRef.id)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
        reject(error.message)
      })
  })
}
