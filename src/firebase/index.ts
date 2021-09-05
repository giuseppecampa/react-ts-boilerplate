import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore/lite'

import firestore from './config'

export const get_docs = (collection_: string): Promise<DocumentData> => {
  return new Promise((resolve) => {
    getDocs(collection(firestore, collection_)).then((res) => {
      resolve(res.docs.map((d) => d.data()))
    })
  })
}

export const get_doc = (collection_: string, doc_: string): Promise<DocumentData> => {
  return new Promise((resolve) => {
    getDoc(doc(firestore, collection_, doc_)).then((res) => {
      if (res.exists()) {
        resolve(res.data())
      } else {
        resolve({})
      }
    })
  })
}

export const set_doc = <T>(collection_: string, doc_: string, data: T): Promise<void> => {
  return new Promise((resolve) => {
    setDoc(doc(firestore, collection_, doc_), data).then((res) => {
      resolve(res)
    })
  })
}

export const delete_doc = (collection_: string, doc_: string): Promise<void> => {
  return new Promise((resolve) => {
    deleteDoc(doc(firestore, collection_, doc_)).then((res) => {
      resolve(res)
    })
  })
}

export const update_doc = <T>(collection_: string, doc_: string, data: T): Promise<void> => {
  return new Promise((resolve) => {
    updateDoc(doc(firestore, collection_, doc_), data).then((res) => {
      resolve(res)
    })
  })
}
