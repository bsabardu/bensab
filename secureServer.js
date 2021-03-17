const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/bensab.fr/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/bensab.fr/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/bensab.fr/chain.pem', 'utf8');

// // Handle https redirect
// app.use((req, res, next) => {
//   if (req.secure) {
//     // request was via https, so do no special handling
//     next();
//   }
//   else {
//     // request was via http, so redirect to https
//     res.redirect(`https://${req.headers.host}${req.url}`);
//   }
// });

// add middlewares
app.use(express.static(path.join(__dirname, 'build'), { dotfiles: 'allow' }));

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

// Starting https servers
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
