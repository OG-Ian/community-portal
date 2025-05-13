// app.js

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// In-memory data arrays
const teamMembers = [
  { name: "Ian", role: "Team Lead, Fullstack Developer", image: "ian.jpg" },
  { name: "Hendrik", role: "Frontend Developer, Data Manager", image: "hendrik.jpeg" },
  { name: "Kutenda", role: "Backend Developer, Data Manager", image: "kutenda.jpeg" },
  { name: "Marius", role: "Frontend, Documentation Manager", image: "marius.jpeg" }
];


let events = [
  {
    title: "Community Clean-up Day",
    date: "2025-05-15",
    location: "Local Park",
    image: "/images/cleanup.jpg",
  },
  {
    title: "Health Awareness Workshop",
    date: "2025-05-20",
    location: "Community Hall",
    image: "/images/health.jpg",
  },
  {
    title: "Youth Talent Show",
    date: "2025-05-25",
    location: "Civic Centre",
    image: "/images/talent.jpg",
  },
  {
    title: "Tech for Teens",
    date: "2025-05-31",
    location: "Library Auditorium",
    image: "/images/tech.jpg",
  },
  {
    title: "Elderly Care Awareness",
    date: "2025-06-06",
    location: "Sunrise Old Age Home",
    image: "/images/elderly.jpg",
  },
];

const messages = []; // Contact form submissions

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const pageRoutes = require("./routes/pageRoutes");
app.use("/", pageRoutes({ teamMembers, events, messages }));

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
