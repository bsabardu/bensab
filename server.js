const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// add middlewares
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
