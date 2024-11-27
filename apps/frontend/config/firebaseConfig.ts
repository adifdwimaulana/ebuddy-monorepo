import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

initializeApp({
  apiKey: "apiKey",
  projectId: "e-buddy-monorepo",
  authDomain: "localhost",
});

const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");

export { auth };
