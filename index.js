const express = require('express');

// Initialize Express app
const expressApp = express();

expressApp.get('/', (req, res) => {
  res.send('Welcome to Firebase App Hosting!');
});


// Health check endpoint
app.get('/healthz', (req, res) => {
  // In a real app, you might check database connections, etc.
  res.status(200).send('OK');
});

// Start the server
const PORT = process.env.PORT
expressApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

