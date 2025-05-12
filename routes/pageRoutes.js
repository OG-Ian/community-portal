const express = require('express');

module.exports = ({ teamMembers, events, messages }) => {
  const router = express.Router();

  // Home Page
  router.get('/', (req, res) => {
    res.status(200)
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

  // Event Detail Page
  router.get('/events/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const event = events[index];

    if (!event) {
      return res.status(404).send('Event not found');
    }

    const prevIndex = index > 0 ? index - 1 : null;
    const nextIndex = index < events.length - 1 ? index + 1 : null;

    res.render('eventDetail', {
      event,
      prevIndex,
      nextIndex
    });
  });

  // Contact Page
  router.get('/contact', (req, res) => {
    res.render('contact');
  });

// Contact Form Submission (POST)
router.post('/contact', (req, res) => {
  const messages = []; // Contact form submissions
    const { name, email, message } = req.body;

    if (name && email && message) {
      messages.push({
        name,
        email,
        message,
        date: new Date().toLocaleString(),
      });
    }
    console.log(messages)

    res.redirect('/thankyou');
  });

  // Thank You Page
  router.get('/thankyou', (req, res) => {
    res.render('thankyou');
  });

  return router;
};
