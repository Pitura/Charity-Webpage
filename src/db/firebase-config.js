import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUwyeuDNSskW0jr5YFKh5rMP1Y8-a90nw",
  authDomain: "charity-app-247de.firebaseapp.com",
  projectId: "charity-app-247de",
  storageBucket: "charity-app-247de.appspot.com",
  messagingSenderId: "967171690940",
  appId: "1:967171690940:web:69ce67d9efb0ec4e7f1bb9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);