const admin = require("firebase-admin");
const fs = require("fs");

// Path to the temporary file
const firebaseKeyPath = "/tmp/firebase-key.json";

// Write the Firebase credentials from the environment variable to a temporary file
fs.writeFileSync(firebaseKeyPath, process.env.FIREBASE_CREDENTIALS);

// Load the service account key from the temporary file
const serviceAccount = require(firebaseKeyPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = db;
