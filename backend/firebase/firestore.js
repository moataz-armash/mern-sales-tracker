const admin = require("firebase-admin");

// Load Firebase service account key from file
const firebaseCredentials = JSON.parse(process.env.FIREBASE_CREDENTIALS);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(firebaseCredentials),
});

const db = admin.firestore();

module.exports = db;
