require("dotenv").config(); // Load environment variables from .env file

const admin = require("firebase-admin");

// Parse Firebase credentials from environment variable
const credentials = JSON.parse(process.env.FIREBASE_CREDENTIALS);

// Replace all escaped `\\n` with actual newlines `\n`
credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();

module.exports = db;
