export async function getDoctors(id) {
  const url = id ? `/api/doctors/${id}` : "/api/doctors"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.doctors
}

// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//   const res = await fetch(url)
//   if (!res.ok) {
//       throw {
//           message: "Failed to fetch vans",
//           statusText: res.statusText,
//           status: res.status
//       }
//   }
//   const data = await res.json()
//   return data.vans
// }

// export async function loginUser(creds) {
//   const res = await fetch("/api/login",
//       { method: "post", body: JSON.stringify(creds) }
//   )
//   const data = await res.json()

//   if (!res.ok) {
//       throw {
//           message: data.message,
//           statusText: res.statusText,
//           status: res.status
//       }
//   }

//   return data
// }















// import { initializeApp } from "firebase/app";
// import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyATRWJUsaTSgXK6BYOHcXdKzpKHsdYVJxg",
//   authDomain: "alternatemedecine.firebaseapp.com",
//   projectId: "alternatemedecine",
//   storageBucket: "alternatemedecine.appspot.com",
//   messagingSenderId: "907897766745",
//   appId: "1:907897766745:web:675c8cc6b3f53bcdc04248"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
// const doctorsCollectionRef = collection(db, "doctors")

// export async function getDoctors() {
//   const snapshot = await getDocs(doctorsCollectionRef)
//   const doctors = snapshot.docs.map(doc => ({
//     ...doc.data(),
//     id: doc.id
//   }))
//   return doctors
// }

// export async function getDoctor(id) {
//   const docRef = doc(db, "doctors", id)
//   const snapshot = await getDoc(docRef)
//   const doctor = {
//     ...snapshot.data(),
//     id: snapshot.id
//   }
//   return doctor
// }
