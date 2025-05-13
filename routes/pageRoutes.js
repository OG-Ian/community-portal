const express = require('express');

// Adding Random event for homepage, shuffle events
function getRandomEvent(events) {
  const index = Math.floor(Math.random() * events.length);
  return { event: events[index], index };
}


module.exports = ({ teamMembers, events, messages }) => {
  const router = express.Router();

  // Home Page - Random Event
  router.get('/', (req, res) => {
    const { event, index } = getRandomEvent(events);
    res.render('home', { event, index, teamMembers });
  });
  


  // About Page
  router.get('/about', (req, res) => {
    res.status(200).render('about', { teamMembers })
  
  });

  // Events Page
  router.get('/events', (req, res) => {
    res.status(200).render('events', { events });
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

    res.status(200).render('eventDetail', {
      event,
      prevIndex,
      nextIndex
    });
  });

  // Contact Page
  router.get('/contact', (req, res) => {
    res.status(200).render('contact');
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
      return res.status(302).redirect('/thankyou')
    }
    

    res.status(400).send('All fields are required');
  });

  // Thank You Page
  router.get('/thankyou', (req, res) => {
    res.status(200).render('thankyou');
  });

// Admin Form Page
router.get('/admin', (req, res) => {
  res.render('admin');
});

// Admin POST
router.post('/admin', (req, res) => {
  const { title, date, location, image } = req.body;
  if (title && date && location && image) {
    events.push({ title, date, location, image });
  }
  res.redirect('/events');
});
router.delete('/events/:index', (req, res) => {
  const eventID = parseInt(req.params.index);

  if (!isNaN(eventID) && eventID >= 0 && eventID < events.length) {
    events.splice(eventID, 1);
  }

  res.redirect('/events');
});


  return router;
};

