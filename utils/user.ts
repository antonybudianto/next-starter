import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  where,
  query,
} from "firebase/firestore";
import getFirebaseApp from "./firebase";

const app = getFirebaseApp();
const TIER = {
  free: {
    type: "free",
    label: "Free",
    workspaceLimit: 3,
    workspaceBackground: false,
  },
  basic: {
    type: "basic",
    label: "Basic",
    workspaceLimit: 20,
    workspaceBackground: true,
  },
  pro: {
    type: "pro",
    label: "Pro",
    workspaceLimit: Infinity,
    workspaceBackground: true,
  },
};

export function getTier(user) {
  try {
    if (!user) {
      throw new Error("NoUser");
    }
    const d = new Date(user.__user.membershipExpireDate);
    if (Date.now() > d.getTime()) {
      throw new Error("MembershipExpired");
    }
    return TIER[user.__user.membershipType || "free"];
  } catch (e) {
    return TIER["free"];
  }
}

export async function checkUsername(username) {
  const res = await getUidByUsername(username);
  return res === null ? true : false;
}

export async function getUidByUsername(username) {
  const db = getFirestore(app);
  const colRef = collection(db, "publicUsers");
  const qRef = query(colRef, where("username", "==", username));
  const res = await getDocs(qRef);
  if (res.empty) {
    return null;
  }
  let data;
  res.forEach((r) => {
    data = {
      id: r.id,
      data: r.data(),
    };
  });
  return data;
}

export async function getUsername(user) {
  const db = getFirestore(app);
  const docRef = doc(db, "publicUsers", user.uid);
  const res = await getDoc(docRef);
  return {
    id: res.id,
    data: res.data(),
  };
}

export async function saveUsername(user, username) {
  const db = getFirestore(app);
  const colRef = collection(db, "publicUsers");
  const docRef = doc(colRef, user.uid);
  return setDoc(docRef, {
    username,
  });
}
