import { getDb } from '@/lib/firebase'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

export type user = {
  id?: string
  first?: string
  middle?: string
  last?: string
  born?: string
  deleting?: boolean
}

export const load = async (): Promise<user[]> => {
  try {
    const db = getDb()
    const q = query(collection(db, 'users'), orderBy('first', 'asc'), limit(10))
    const snapshot = await getDocs(q)
    const users = []
    snapshot.forEach((doc) => {
      const user = doc.data()
      users.push({ id: doc.id, ...user })
    })
    return users
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const create = async (user: user): Promise<string> => {
  try {
    const db = getDb()
    const docRef = await addDoc(collection(db, 'users'), user)
    return docRef.id
  } catch (e) {
    console.error('Error adding document: ', e)
    throw e
  }
}

export const update = async (user: user): Promise<user> => {
  try {
    const db = getDb()
    const docRef = doc(db, 'users', user.id)
    await updateDoc(docRef, user)
    return user
  } catch (e) {
    console.error('Error updating document: ', e)
    throw e
  }
}

export const remove = async (id: string): Promise<string> => {
  try {
    const db = getDb()
    await deleteDoc(doc(db, 'users', id))
    return id
  } catch (e) {
    console.error('Error deleting document: ', e)
    throw e
  }
}
