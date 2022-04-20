import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config'
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const app = initializeApp(firebaseConfig)

const auth = getAuth();
const provider = new GoogleAuthProvider();


function onAuth(setUserProfile, setUserData) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserProfile(user)
      // getData(user, setUserData)
    } else {
      setUserProfile(user)
    }
  });
}






// ---------------------------Login, Sign Up and Sign In------------------------------------


function signUpWithEmail (email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
function signInWithEmail (email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

function withGoogle () {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


export { onAuth, signUpWithEmail, signInWithEmail, withGoogle }
