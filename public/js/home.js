const events = [
  {
    title: "Community Clean-up Day",
    date: "2025-05-15",
    location: "Local Park",
    image: "/images/cleanup.jpg",
    index: 0
  },
  {
    title: "Health Awareness Workshop",
    date: "2025-05-20",
    location: "Community Hall",
    image: "/images/health.jpg",
    index: 1
  },
  {
    title: "Youth Talent Show",
    date: "2025-05-25",
    location: "Civic Centre",
    image: "/images/talent.jpg",
    index: 2
  },
  {
    title: "Tech for Teens",
    date: "2025-05-31",
    location: "Library Auditorium",
    image: "/images/tech.jpg",
    index: 3
  },
  {
    title: "Elderly Care Awareness",
    date: "2025-06-06",
    location: "Sunrise Old Age Home",
    image: "/images/elderly.jpg",
    index: 4
  }
];

let currentIndex = 0;
const container = document.getElementById("featuredEvent");

function renderEvent(event) {
  container.innerHTML = `
    <div class="card bg-transparent border-0">
      <a href="/events/${event.index}">
        <img src="${event.image}" class="card-img-top mb-3 rounded shadow" alt="${event.title}">
      </a>
      <div class="card-body text-white">
        <h5 class="card-title">
          <a href="/events/${event.index}" class="text-decoration-none text-white fw-bold">${event.title}</a>
        </h5>
        <p class="card-text text-white-50 small">
          <i class="bi bi-calendar-event me-1"></i> ${event.date}<br>
          <i class="bi bi-geo-alt me-1"></i> ${event.location}
        </p>
      </div>
    </div>
  `;
}

renderEvent(events[currentIndex]);

setInterval(() => {
  container.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % events.length;
    renderEvent(events[currentIndex]);
    container.style.opacity = 1;
  }, 300); // wait before rendering next
}, 5000);

