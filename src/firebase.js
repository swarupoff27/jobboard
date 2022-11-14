import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";

// import { getDatabase, ref, set} from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqZCCw5gEsQrPXRt1E3CO-rmvvNpeJMS8",
  authDomain: "job-board-ffc84.firebaseapp.com",
  projectId: "job-board-ffc84",
  storageBucket: "job-board-ffc84.appspot.com",
  messagingSenderId: "431817892648",
  appId: "1:431817892648:web:7f6ec6291f729a8674261d",
  databaseURL: "https://job-board-ffc84-default-rtdb.firebaseio.com",
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);



// function writeUserData(userId, name, email) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//   });
// }




export default app







