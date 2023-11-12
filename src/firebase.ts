import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa-Gi3PEC8TVDdSDw0MfHt2JlD8AO-qJ4",
  authDomain: "discord-clone-udemy-71ee2.firebaseapp.com",
  projectId: "discord-clone-udemy-71ee2",
  storageBucket: "discord-clone-udemy-71ee2.appspot.com",
  messagingSenderId: "208352921745",
  appId: "1:208352921745:web:db31c6cacaa6d1013c9730"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
// export default db;