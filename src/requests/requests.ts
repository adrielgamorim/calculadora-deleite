import { db } from "@helpers/service";
import { collection, getDoc, getDocs, doc, setDoc, deleteDoc, addDoc } from "firebase/firestore";
import type { Base } from "@models/Base";

export async function getDocuments<T>(collectionName: string): Promise<T[]> {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as T[];
}

export async function getDocumentById<T>(collectionName: string, id: string): Promise<T | null> {
  const docRef = doc(db, collectionName, id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? ({ id: snapshot.id, ...snapshot.data() } as T) : null;
}

export async function addDocument<T extends Base>(collectionName: string, data: T): Promise<string> {
  const collectionRef = collection(db, collectionName);
  const docRef = await addDoc(collectionRef, data);
  console.log(`${collectionName} written with name: ${data.name}`);
  return docRef.id;
}

export async function updateDocument<T extends Base>(collectionName: string, id: string, data: Partial<T>): Promise<void> {
  const docRef = doc(db, collectionName, id);
  await setDoc(docRef, data, { merge: true });
  console.log(`${collectionName} with ID ${id} updated`);
}

export async function deleteDocument(collectionName: string, id: string): Promise<void> {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
  console.log(`${collectionName} with ID ${id} deleted`);
}
