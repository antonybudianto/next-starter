let firebaseAuthModule;
let firebaseStoreModule;

export const lazyFirebaseAuth = async () => {
  if (!firebaseAuthModule) {
    firebaseAuthModule = (
      await import(/* webpackChunkName: "lib-fb-auth" */ "firebase/compat/auth")
    ).default;
  }

  return firebaseAuthModule;
};

export const lazyFirebaseStore = async () => {
  if (!firebaseStoreModule) {
    firebaseStoreModule = (
      await import(
        /* webpackChunkName: "lib-fb-store" */ "firebase/compat/firestore"
      )
    ).default;
  }

  return firebaseStoreModule;
};
