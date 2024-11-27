import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "http://localhost:8080",
});

const db = admin.firestore();
const auth = admin.auth();

db.settings({
  host: "localhost:8080",
  ssl: false,
});

export { admin, db, auth };
