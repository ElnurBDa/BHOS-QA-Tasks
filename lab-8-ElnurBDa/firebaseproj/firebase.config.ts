import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: Bun.env.YOUR_API_KEY,
  authDomain: Bun.env.YOUR_AUTH_DOMAIN,
  projectId: Bun.env.PROJECT_ID,
  storageBucket: Bun.env.STORAGE_BUCKET,
  messagingSenderId: Bun.env.MESSAGING_SENDER_ID,
  appId: Bun.env.APP_ID,
  measurementId: Bun.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
