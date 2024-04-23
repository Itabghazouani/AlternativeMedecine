import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATRWJUsaTSgXK6BYOHcXdKzpKHsdYVJxg",
  authDomain: "alternatemedecine.firebaseapp.com",
  projectId: "alternatemedecine",
  storageBucket: "alternatemedecine.appspot.com",
  messagingSenderId: "907897766745",
  appId: "1:907897766745:web:675c8cc6b3f53bcdc04248"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const doctorsCollectionRef = collection(db, "doctors")

export async function getDoctors() {
  const snapshot = await getDocs(doctorsCollectionRef)
  const doctors = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return doctors
}

export async function getDoctor(id) {
  const docRef = doc(db, "doctors", id)
  const snapshot = await getDoc(docRef)
  const doctor = {
    ...snapshot.data(),
    id: snapshot.id
  }
  return doctor
}
