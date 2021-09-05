import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const config = {
  apiKey: 'AIzaSyBYf0sTVvIcSYKTrdjRkF1RlIESoQDv7sU',
  authDomain: 'react-ts-boilerplate-demo.firebaseapp.com',
  projectId: 'react-ts-boilerplate-demo',
  storageBucket: 'react-ts-boilerplate-demo.appspot.com',
  messagingSenderId: '5436737949',
  appId: '1:5436737949:web:a1db317526e857a6cfc774',
  measurementId: 'G-J8F7ZC264J',
}

const app = initializeApp(config)
const firestore = getFirestore(app)

export default firestore
