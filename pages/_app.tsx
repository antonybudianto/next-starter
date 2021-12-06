import "tailwindcss/tailwind.css";
import "../styles.css";
import { AuthProvider } from "../context/auth";
import AuthChecker from "../components/AuthChecker";
import getFirebaseApp from "../utils/firebase";

getFirebaseApp();

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
