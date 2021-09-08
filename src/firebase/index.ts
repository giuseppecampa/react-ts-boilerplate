import { deleteDoc, doc, DocumentData, getDoc, setDoc } from 'firebase/firestore/lite'
import { opt } from 'src/types'

import firestore, { FIRE_BRANCHES } from './config'

export const get_firedoc = (branch: string): Promise<opt<DocumentData>> => {
  const fb = FIRE_BRANCHES[branch]
  return new Promise((resolve) => {
    getDoc(doc(firestore, fb?.co_name, fb?.do_name))
      .then((res) => resolve(res?.exists() ? res?.data()?.[fb?.br_name] : undefined))
      .catch(() => resolve(undefined))
  })
}

export const set_firedoc = <T>(branch: string, data: T): Promise<opt<boolean>> => {
  const fb = FIRE_BRANCHES[branch]
  return new Promise((resolve) => {
    setDoc(doc(firestore, fb?.co_name, fb?.do_name), { [fb?.br_name]: data })
      .then(() => resolve(true))
      .catch(() => resolve(undefined))
  })
}

export const delete_firedoc = (branch: string): Promise<void> => {
  const fb = FIRE_BRANCHES[branch]
  return new Promise((resolve) => {
    deleteDoc(doc(firestore, fb?.co_name, fb?.do_name))
      .then((res) => resolve(res))
      .catch(() => resolve(undefined))
  })
}
