import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDkAe3HHt8Q1oDj3HYlFIBvYkMH8oLgJi4',
  authDomain: 'file-manager-46782.firebaseapp.com',
  projectId: 'file-manager-46782',
  storageBucket: 'file-manager-46782.appspot.com',
  messagingSenderId: '160231573469',
  appId: '1:160231573469:web:50ddb13989671792ae9834',
  measurementId: 'G-24TN8LSX11'
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const GoogleProvider = new GoogleAuthProvider();

export type Collection = 'users';
export const db = getFirestore(app);
