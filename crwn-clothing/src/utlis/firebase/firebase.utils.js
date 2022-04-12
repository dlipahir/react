// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGli2qdiaXL9RVqsb2GIq6-pfy2D77FQ0",
    authDomain: "react-project-88ee0.firebaseapp.com",
    projectId: "react-project-88ee0",
    storageBucket: "react-project-88ee0.appspot.com",
    messagingSenderId: "529360353401",
    appId: "1:529360353401:web:e25ff3fd3bbe1b1d477ca8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocAuth = async(userAuth) => {
    const userdocRef = doc(db, "users", userAuth.uid);
    console.log(userdocRef);
    const userSnapshot = await getDoc(userdocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    //if user data not exists
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userdocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log("error is happning", error.message);
        }
    }
    return userdocRef;
};