const express = require('express');
const path = require('path');
const app = express();

// Cloud Run requires the server to listen on the port defined by the PORT environment variable.
const PORT = process.env.PORT || 8080;

// Serve all static files from the root directory.
app.use(express.static(__dirname));

// Custom MIME type handling for .tsx files if the platform relies on browser-side transpilation
// or if the environment needs to recognize these modules correctly.
express.static.mime.define({'application/javascript': ['tsx', 'ts']});

// Support for Single Page Application (SPA) routing:
// Redirect any non-file request to index.html so the client-side router can take over.
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, req.path);
  // Check if it's a specific file request that failed (like a missing image)
  // Otherwise, default to index.html for navigation routes.
  if (req.path.includes('.') && !req.path.endsWith('.html')) {
    res.status(404).send('Not found');
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

// Bind to 0.0.0.0 to ensure the service is reachable within the container network.
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Production] Big Feelings Book Co. is listening on port ${PORT}`);
});