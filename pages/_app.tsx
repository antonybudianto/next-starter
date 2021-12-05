import "tailwindcss/tailwind.css";
import "../styles.css";
import firebase from "firebase/compat/app";
import { AuthProvider } from "../context/auth";
import AuthChecker from "../components/AuthChecker";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};
firebase.initializeApp(config);

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthChecker>
        <Component {...pageProps} />
      </AuthChecker>
    </AuthProvider>
  );
}

export default MyApp;
