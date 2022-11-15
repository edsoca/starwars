import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8NRL0G9OkAkakWn3EwExCyUez5joNXes",
  authDomain: "starwars-aaad5.firebaseapp.com",
  databaseURL: "https://starwars-aaad5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "starwars-aaad5",
  storageBucket: "starwars-aaad5.appspot.com",
  messagingSenderId: "256765689029",
  appId: "1:256765689029:web:79d61b761dae30a56004ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

function writeUserData(userId, name, email, imageUrl, mode) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl
  }).then(() => { if (mode) window.location.href = 'levels' });
}

function readUserData(userId) {
  const dbRef = ref(getDatabase());
  return new Promise (result  => 
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      result(snapshot.val());
    } else {
      result(null);
    }
  }).catch((error) => {
    console.error(error);
    result(null);
  })
  )}

export { app, auth, provider, writeUserData, readUserData }

