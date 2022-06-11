import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyCFpg9A6rvn8zcO5OxM8_5eezKQkmK6HqQ",

    authDomain: "games-web-app-84f65.firebaseapp.com",

    projectId: "games-web-app-84f65",

    storageBucket: "games-web-app-84f65.appspot.com",

    messagingSenderId: "72474452776",

    appId: "1:72474452776:web:6fbbc8e7662b16c52ce61d"

};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => signInWithPopup(auth, provider);