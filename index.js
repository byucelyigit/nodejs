const express = require('express');

// Initialize Express app
const expressApp = express();

expressApp.get('/', (req, res) => {
  res.send('Welcome to Firebase App Hosting!');
});


// Start the server
const PORT = process.env.PORT
expressApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

