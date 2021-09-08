import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { dict } from 'src/types'

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

export interface fire_branch_t {
  co_name: string
  do_name: string
  br_name: string
}

export const FIRE_BRANCHES: dict<fire_branch_t> = {
  bandicoots: {
    co_name: 'demo',
    do_name: 'maGUX3cz224wrBz9Qo25',
    br_name: 'bandicoots',
  },
}

export default getFirestore(app)
