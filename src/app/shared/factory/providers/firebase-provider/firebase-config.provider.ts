// firebaseConfig.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { environments } from "../../../../../environments/environments";

const firebaseConfig = {
  apiKey: environments.API_KEY,
  authDomain: environments.AUTH_DOMAIN,
  databaseURL: environments.DATABASE_URL,
  projectId: environments.PROJECT_ID,
  storageBucket: environments.STORAGE_BUCKET,
  messagingSenderId: environments.MESSAGING_SENDER_ID,
  appId: environments.APP_ID,
  measurementId: environments.MEASUREMENT_ID
};

let app: FirebaseApp | null = null;

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app;
}
