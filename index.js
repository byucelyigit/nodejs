const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Ensure this file exists and is configured

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Initialize Express app.
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Firebase App Hosting  !');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
