import config from "./app.config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: config.extra.firebaseApiKey,
  authDomain: config.extra.firebaseAuthDomain,
  databaseURL: config.extra.firebaseDatabaseURL,
  projectId: config.extra.firebaseProjectId,
  storageBucket: config.extra.firebaseStorageBucket,
  messagingSenderId: config.extra.firebaseMessagingSenderId,
  appId: config.extra.firebaseAppId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
