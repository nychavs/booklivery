import { getStorage } from "firebase/storage";
import {collection, getFirestore, getDocs} from 'firebase/firestore'
import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAB7nNBse4swBCeZPgpd-goi5yl-qh8Iy0",
  authDomain: "booklivery-6641a.firebaseapp.com",
  projectId: "booklivery-6641a",
  storageBucket: "booklivery-6641a.appspot.com",
  messagingSenderId: "1088444260887",
  appId: "1:1088444260887:web:22b5e2d4593fa87ce5b252"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
export {
    db,
    storage,
}