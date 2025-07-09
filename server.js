const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const projects = require('./data/projects');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send({
    name: 'Prem Jaiswal',
    title: 'Full Stack Developer',
    message: 'Welcome to my portfolio backend API.'
  });
});

app.get('/about', (req, res) => {
  res.send({
    name: 'Prem Jaiswal',
    role: 'Full Stack Developer',
    bio: 'I am passionate about backend systems, DevOps, and cloud infrastructure.'
  });
});

app.get('/projects', (req, res) => {
  res.send(projects);
});

app.get('/contact', (req, res) => {
  res.send({
    email: 'prem.jai444@gmail.com',
    phone: '+91-9876543210',
    location: 'India'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Portfolio backend is running at http://localhost:${port}`);
});
