import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

const KKKKEY = 'https://api.themoviedb.org/3/movie/550?api_key=771ce98fabcdca30b416c5fedce482f5'

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app);
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB7q6wsw35if1MkZZ2YUymqiwhTUEJNOWU",
//   authDomain: "netflix-clone-7f556.firebaseapp.com",
//   projectId: "netflix-clone-7f556",
//   storageBucket: "netflix-clone-7f556.appspot.com",
//   messagingSenderId: "776752390619",
//   appId: "1:776752390619:web:6184d232fd38c95b0907fe"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);