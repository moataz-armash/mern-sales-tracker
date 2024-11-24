const admin = require("firebase-admin");

// Load Firebase service account key from file
const serviceAccount = require("../firebase-key.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
