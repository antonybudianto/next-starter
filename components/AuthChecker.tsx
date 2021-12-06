import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useUser } from "../context/auth";
import getFirebaseApp from "../utils/firebase";

function AuthChecker({ children }) {
  const { user, setUser, setLoading } = useUser();

  useEffect(() => {
    if (user) {
      return;
    }

    async function loadAuth() {
      const auth = getAuth(getFirebaseApp());
      /**
       * @TODO still need lazy load?
       */
      // await Promise.all([lazyFirebaseAuth(), lazyFirebaseStore()]);
      onAuthStateChanged(
        auth,
        async (user) => {
          try {
            const db = getFirestore(getFirebaseApp());
            let __user = {};
            if (user) {
              const docRef = doc(db, "users", user.uid);
              const res = await getDoc(docRef);
              if (res.exists()) {
                __user = res.data() || { offline: true };
              }
              // @ts-ignore
              setUser({ ...user, __user });
            } else {
              setUser(null);
            }
            setLoading(false);
          } catch (e) {
            console.error(e);
            setUser({ ...user, __user: { offline: true } });
            setLoading(false);
          }
        },
        () => {
          setLoading(false);
        }
      );
    }
    loadAuth();
  }, [setUser, user]);
  return children;
}

export default AuthChecker;
