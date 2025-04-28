const express = require('express');
const { initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');

// Initialize Firebase Admin SDK
const app = initializeApp();

// Initialize Express app
const expressApp = express();

expressApp.get('/', (req, res) => {
  res.send('Welcome to Firebase App Hosting!');
});


// Start the server
const PORT = process.env.PORT || 5000;
expressApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

