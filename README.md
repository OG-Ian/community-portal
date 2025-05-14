# Community Portal Project

A dynamic and responsive portal for local communities to stay informed, discover events, and connect with organizers. Built using Node.js, Express.js, EJS, CSS, and HTML this platform enables easy event access, user communication, and content management.

---

## 🚀 Features

- 🏠 Dynamic homepage with rotating featured events (auto-refreshes every 5 seconds)
- 🖼 Smooth fade-in transitions for featured content
- 👥 Team member section with conditional image/icon rendering
- 🗓 Events page with all upcoming events pulled from an array
- 🔍 Live search bar for instant event filtering
- ➡️ Event detail pages with previous/next navigation
- 🧾 Admin form to post new events dynamically (stored in memory)
- 📬 Contact form with validation and redirect to thank-you page
- ✨ Clean, professional Bootstrap styling with custom CSS
- 🔗 Fully responsive layout across desktop and mobile

---

## 🧠 Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Bootstrap 5 + Bootstrap Icons
- Custom CSS & JavaScript
- Git + GitHub

---

## 👥 Team Members

| Name     | Role                  |
|----------|-----------------------|
| Ian      | Team Lead & Dev       |
| Hendrik  | Frontend Developer     |
| Kutenda  | Backend Developer    |
| Marius   | Documentation Manager |

> Team photos are conditionally displayed based on availability.

---

## 📁 Folder Structure

community-portal/
│
├── public/
│ ├── css/style.css
│ ├── js/home.js
│ └── images/
│ └── team/ian.jpg, etc.
│
├── routes/
│ └── pageRoutes.js
│
├── views/
│ ├── pages/
│ │ ├── home.ejs
│ │ ├── about.ejs
│ │ ├── events.ejs
│ │ ├── eventDetail.ejs
│ │ ├── contact.ejs
│ │ ├── thankyou.ejs
│ │ └── admin.ejs
│ └── partials/
│ ├── header.ejs
│ └── footer.ejs
│
├── app.js
└── README.md

## Instructions

1. Run `npm install` to install dependencies.
2. Use `npm run dev` to start the development server with nodemon.
3. Add your own route handlers and middleware as needed.
4. Open your browser and go to:
http://localhost:3000

## Team participation

- All team mebers contributed
