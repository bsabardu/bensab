const express = require('express');
const path = require('path');

const app = express();

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

app.listen(8080, () => {
  console.log('HTTP Server running on port 8080');
});
