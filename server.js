const express = require('express');
const path = require('path');
const app = express();

/**
 * Cloud Run automatically injects the PORT environment variable.
 * The server must listen on this port to be considered healthy.
 */
const PORT = process.env.PORT || 8080;

/**
 * Serve static files from the root directory.
 * In this environment, index.tsx and other modules are transpiled 
 * either at build time or on-the-fly by the platform.
 */
app.use(express.static(__dirname));

/**
 * Support for Single Page Application (SPA) routing.
 * Any request that doesn't match a static file will serve index.html,
 * allowing React Router to manage the route.
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * Bind to 0.0.0.0 to ensure the service is accessible from outside the container.
 */
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Big Feelings Book Co. server is live on port ${PORT}`);
});