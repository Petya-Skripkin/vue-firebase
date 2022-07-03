import { initializeApp } from "firebase/app";
import { getFirestore, doc, deleteDoc, collection, getDocs, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBBlZf8eUWYSjAPd6nNHCrouPrn186WTLg",
  authDomain: "documents-e7f56.firebaseapp.com",
  projectId: "documents-e7f56",
  storageBucket: "documents-e7f56.appspot.com",
  messagingSenderId: "671456653324",
  appId: "1:671456653324:web:d9cbc086ab4bfe3ecbfe29",
  measurementId: "G-ZJ46DE2H2H"
}

const firebaseApp = initializeApp(config)

const db = getFirestore(firebaseApp)

export default db;

export const getData = async (dataList) => {
  const data = await getDocs(collection(db, dataList));
  const result = [];
  
  data.forEach(item => result.push(item.data()));

  return result;
}

export const deleteData = async (dataList, id) => {
  await deleteDoc(doc(db, dataList, id));
}

export const getOnceDocument = async (dataList, id) => {
  const data = await getDoc(doc(db, dataList, id))
  return data.data()
}

export const setDocument = (dataList, card) => {
  setDoc(doc(db, dataList, card.ID), {
    surname: card.surname,
    name: card.name,
    patronymic: card.patronymic,
    ID: card.ID,
    BirthDay: card.BirthDay,
    plaseBirth: card.plaseBirth,
    IssueDate: card.IssueDate,
    certificate: card.certificate,
    gender: card.gender,
  });
}
