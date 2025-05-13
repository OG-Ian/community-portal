// app.js

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');


const app = express();
const port = 3000;

// In-memory data arrays
const teamMembers = [
  { name: "Ian", role: "Team Lead", image: "ian.jpg" },
  { name: "Hendrik", role: "Frontend Developer", image: "hendrik.jpeg" },
  { name: "Kutenda", role: "Backend Developer", image: "kutenda.jpeg" },
  { name: "Marius", role: "Documentation Manager", image: "marius.jpeg" }
];

// Event Details and Description 
let events = [
  {
    title: "Community Clean-up Day",
    date: "2025-05-15",
    time: "9:00 AM - 3:00 PM",
    location: "Local Park",
    image: "/images/cleanup.jpg",
    description: "Join us for a day of cleaning up our local park. Supplies will be provided.",
    details: "We will meet at the park entrance at 9 AM. Please wear comfortable clothes and bring gloves if you have them. Coffee and snacks will be provided once the event is over. This event is open to all ages.",
    rules: "No littering, no smoking, and please respect the park's rules.",
    bring: "Please bring gloves, a reusable water bottle, and any other supplies you think might be helpful.",
    Weather: "In case of rain, the event will be rescheduled to the following Saturday.",
    parking: "Free parking is available at the park. Please arrive early to secure a spot.",
    accessibility: "The venue is wheelchair accessible. If you have any other accessibility needs, please contact us in advance.", 
    food: "Lunch will be provided for all volunteers. Please let us know if you have any dietary restrictions.",
  },
  {
    title: "Health Awareness Workshop",
    date: "2025-05-20",
    time: "10:00 AM - 1:00 PM",
    location: "Community Hall",
    image: "/images/health.jpg",
    description: "A workshop focusing on health and wellness for all ages.",
    details: "Join us for a workshop on health and wellness. We will cover topics such as nutrition, exercise, and mental health. There will be a Q&A session near the end of the event if anyone has questions. This event is open to all ages.",
    rules: "please be respectful to the speakers and other attendees. No food or drinks allowed in the auditorium.",
    bring: "Please bring a notebook and pen for taking notes.",
    parking: "Free parking is available on-site. Please arrive early to secure a spot.",
    accessibility: "The venue is wheelchair accessible. If you have any other accessibility needs, please contact us in advance.",
    food: "Lunch will be provided for all attendees. Please let us know if you have any dietary restrictions.",
  },
  {
    title: "Youth Talent Show",
    date: "2025-05-25",
    time: "6:00 PM - 9:00 PM",
    location: "Civic Centre",
    image: "/images/talent.jpg",
    description: "Showcase your talent in our annual youth talent show. Prizes for the top three performers!",
    details: "Participants can sign up to perform in front of a live audience. Prizes will be awarded for the top three performances. This event will be open to all ages, but performers must be between the ages of 12 and 18. Contact us on our website to reserve your spot.",
    rules: "All performances must be family-friendly. No explicit content or language will be tolerated.",
    bring: "Please bring your own instruments or props. A microphone and sound system will be provided.",
    dress: "Please dress appropriately for your performance. Costumes are encouraged but not required.",
    parking: "Free parking is available on-site. Please arrive early to secure a spot.",
    accessibility: "The venue is wheelchair accessible. If you have any other accessibility needs, please contact us in advance.",
    food: "Snacks and drinks will be available for purchase at the event. Please let us know if you have any dietary restrictions.",
  },
  {
    title: "Tech for Teens",
    date: "2025-05-31",
    time: "10:00 AM - 2:00 PM",
    location: "Library Auditorium",
    image: "/images/tech.jpg",
    description: "A workshop for teens to learn about technology and coding.",
    details: "Join us for a workshop where teens can learn about technology and coding. No prior experience necessary in order to join. We will be showcassing different coding examples and guiding you on how to do it step by step. This event is open to all teens aged 13-19. Lunch will be provided after the event.",
    rules: "Please be respectful to the instructors and other attendees. No food or drinks allowed in the auditorium.",
    bring: "Please bring a laptop if you have one. We will have computers available for those who do not have available.", 
    accessibility: "The venue is wheelchair accessible. If you have any other accessibility needs, please contact us in advance.", 
    parking: "Free parking is available on-site. Please arrive early to secure a spot.",
    food: "Lunch will be provided for all attendees. Please let us know if you have any dietary restrictions.",
  },
  {
    title: "Elderly Care Awareness",
    date: "2025-06-06",
    time: "10:00 AM - 2:00 PM",
    location: "Sunrise Old Age Home",
    image: "/images/elderly.jpg",
    description: "An event to raise awareness about elderly care and support.",
    details: "Join us for a discussion on elderly care and support. We will have guest speakers and resources available for you to better understand the health and safety of eldery people. This event will be open to all ages, but we encourage those who are interested in elderly care to attend. Lunch will be provided after the event.",
    rules: "Please be respectful to the speakers and other attendees. No food or drinks allowed in the auditorium.",
    bring: "Please bring a notebook and pen for taking notes.",
    accessibility: "The venue is wheelchair accessible. If you have any other accessibility needs, please contact us in advance.", 
    parking: "Free parking is available on-site. Please arrive early to secure a spot.",
    food: "Lunch will be provided for all attendees. Please let us know if you have any dietary restrictions.",
  },
];


const messages = []; // Contact form submissions

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Routes
const pageRoutes = require("./routes/pageRoutes");
app.use("/", pageRoutes({ teamMembers, events, messages }));

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
