
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/Experience', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Experience.html'));
});

app.get('/Projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Projects.html'));
});

app.get('/Contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Contact.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });