const express = require('express');

module.exports = ({ teamMembers, events, messages }) => {
  const router = express.Router();

  // Home Page
  router.get('/', (req, res) => {
    res.render('home', { events });
  });

  // About Page
  router.get('/about', (req, res) => {
    res.render('about', { teamMembers });
  });

  // Events Page
  router.get('/events', (req, res) => {
    res.render('events', { events });
  });

  // Contact Page
  router.get('/contact', (req, res) => {
    res.render('contact');
  });

// Contact Form Submission (POST)
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (name && email && message) {
      messages.push({
        name,
        email,
        message,
        date: new Date().toLocaleString(),
      });
    }

    res.redirect('/thankyou');
  });

  // Thank You Page
  router.get('/thankyou', (req, res) => {
    res.render('thankyou');
  });

  return router;
};
