import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv1gfnoq-DPp5Wjpn2H3mEbzaUjaBNzkg",
    authDomain: "clone-ff98e.firebaseapp.com",
    projectId: "clone-ff98e",
    storageBucket: "clone-ff98e.appspot.com",
    messagingSenderId: "845214334677",
    appId: "1:845214334677:web:b4d8bde73187544f93ec5c",
    measurementId: "G-HYZWYNLZRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('Abhi@321'), // Make sure the site key is correct.

    // Optional argument. If true, the SDK automatically refreshes App Check tokens as needed.
    isTokenAutoRefreshEnabled: true, // Optional: set to false if you don't need automatic token refresh.
});

export { auth };
export default db;
