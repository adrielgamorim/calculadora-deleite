import type { Ingredient } from "@models/Ingredient";
import { db } from "@helpers/service";
import { collection, getDocs, doc, setDoc, deleteDoc, addDoc } from "firebase/firestore";

export async function getDocuments(collectionName: string): Promise<Ingredient[]> {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Ingredient[];
}

export async function addDocument(collectionName: string, data: Ingredient): Promise<string> {
  const collectionRef = collection(db, collectionName);
  const docRef = await addDoc(collectionRef, data);
  console.log(`Document written with name: ${data.name}`);
  return docRef.id;
}

export async function updateDocument(collectionName: string, id: string, data: Partial<Ingredient>): Promise<void> {
  const docRef = doc(db, collectionName, id);
  await setDoc(docRef, data, { merge: true });
  console.log(`Document with ID ${id} updated`);
}

export async function deleteDocument(collectionName: string, id: string): Promise<void> {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
  console.log(`Document with ID ${id} deleted`);
}
