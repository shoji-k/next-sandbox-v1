import { getFirestore } from 'firebase/firestore';
import { FirebaseApp, getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  appId: process.env.APP_ID,
}

export const getFirebaseApp = (): FirebaseApp | undefined => {
  // if (typeof window === "undefined") return; // avoid to run backend

  return getApps()[0] || initializeApp(firebaseConfig);
};

export const getDb = () => getFirestore(getFirebaseApp())