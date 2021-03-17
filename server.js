const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/bensab.fr/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/bensab.fr/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/bensab.fr/chain.pem', 'utf8');

// add middlewares
app.use(express.static(path.join(__dirname, 'build'), { dotfiles: 'allow' }));

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Starting both http & https servers
const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(3000, () => {
  console.log('HTTP Server running on port 3000');
});

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
