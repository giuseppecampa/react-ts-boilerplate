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

export const get_branch = (
  co_name: string,
  do_name: string,
  br_name: string
): Promise<DocumentData> => {
  return new Promise((resolve) => {
    getDoc(doc(firestore, co_name, do_name)).then((res) => {
      if (res.exists()) {
        resolve(res.data()?.[br_name])
      } else {
        resolve({})
      }
    })
  })
}

export const set_branch = <T>(co_name: string, do_name: string, data: T): Promise<void> => {
  return new Promise((resolve) => {
    setDoc(doc(firestore, co_name, do_name), data).then((res) => {
      resolve(res)
    })
  })
}

export const delete_doc = (co_name: string, do_name: string): Promise<void> => {
  return new Promise((resolve) => {
    deleteDoc(doc(firestore, co_name, do_name)).then((res) => {
      resolve(res)
    })
  })
}

export const update_doc = <T>(co_name: string, do_name: string, data: T): Promise<void> => {
  return new Promise((resolve) => {
    updateDoc(doc(firestore, co_name, do_name), data).then((res) => {
      resolve(res)
    })
  })
}
