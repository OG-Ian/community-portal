const express = require('express');

//for adding/deleting events
const validCodes = ["ian-010", "hendrik-010", "kutenda-010", "marius-010"];


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
    res.render('home', { featuredEvent: event, index, teamMembers });
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
    console.log(messages)

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
router.post("/admin", (req, res) => {
  const { title, date, location, image, code } = req.body;
  if (!validCodes.includes(code.toLowerCase())) {
    return res.send("Invalid Developer Code.");
  }

  if (title && date && location && image) {
    events.push({ title, date, location, image });
  }
  res.redirect("/events");
});

// Delete Event Page
router.get("/delete-event", (req, res) => {
  res.render("deleteEvent", {
    events,
    message: "Choose an event to delete.",
    success: true
  });
});

// Delete Event POST
router.post("/delete-event", (req, res) => {
  const { title, code } = req.body;
  if (!validCodes.includes(code.toLowerCase())) {
    return res.send("Invalid Developer Code.");
  }

  const initialLength = events.length;
  const updatedEvents = events.filter(event => event.title !== title);

  if (updatedEvents.length === initialLength) {
    return res.send("Event not found.");
  }

  // Clear and repopulate original array to preserve reference
  events.length = 0;
  updatedEvents.forEach(event => events.push(event));

  res.redirect("/");
});

  return router;
};

