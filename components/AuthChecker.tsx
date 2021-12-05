import { useEffect } from "react";
import { useUser } from "../context/auth";
import firebase from "firebase/compat/app";
import { lazyFirebaseAuth, lazyFirebaseStore } from "../utils/lazyFirebase";

function AuthChecker({ children }) {
  const { user, setUser, setLoading } = useUser();

  useEffect(() => {
    if (user) {
      return;
    }

    async function loadAuth() {
      await Promise.all([lazyFirebaseAuth(), lazyFirebaseStore()]);
      firebase.auth().onAuthStateChanged(
        async (user) => {
          try {
            const db = firebase.firestore();
            let __user = {};
            if (user) {
              const ref = db.collection("users").doc(user.uid);
              const res = await ref.get();
              if (res.exists) {
                __user = res.data();
              }
              // @ts-ignore
              setUser({ ...user.multiFactor.user, __user });
            } else {
              setUser(null);
            }
            setLoading(false);
          } catch (e) {
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
