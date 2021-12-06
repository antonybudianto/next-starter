import { initializeApp } from "firebase/app";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "antony-studio-dev.appspot.com",
  messagingSenderId: "726507425551",
  appId: "1:726507425551:web:8cbd15e8a9e7ccf736387a",
};

let firebaseApp;

function getFirebaseApp() {
  if (!firebaseApp) {
    firebaseApp = initializeApp(config);
  }
  return firebaseApp;
}

export default getFirebaseApp;
