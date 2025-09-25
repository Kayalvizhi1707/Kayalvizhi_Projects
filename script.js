const videos = [
  { title: "Football Highlights", category: "football", src: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Gaming Montage", category: "gaming", src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" },
  { title: "E-Commerce Ad", category: "ads", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Anime Short Edit", category: "anime", src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" },
  { title: "Mini Documentary", category: "docu", src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" },
  { title: "Color Grading Demo", category: "color", src: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Trending Short Reel", category: "short", src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" },
  { title: "Vlog — Long Form", category: "long", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

const grid = document.getElementById("grid");
const filters = document.querySelectorAll("#filters button");
const searchInput = document.getElementById("search");
const searchIcon = document.getElementById("searchIcon");

function renderVideos(filter = "all", search = "") {
  grid.innerHTML = "";
  let filtered = videos.filter(v =>
    (filter === "all" || v.category === filter) &&
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  filtered.forEach(v => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <video src="${v.src}" controls autoplay muted loop style="width:100%;border-radius:12px"></video>
      <h3>${v.title}</h3>
    `;
    grid.appendChild(card);
  });
}

renderVideos();

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderVideos(btn.dataset.filter, searchInput.value);
  });
});

searchInput.addEventListener("input", () => {
  const active = document.querySelector(".filters button.active").dataset.filter;
  renderVideos(active, searchInput.value);
});

searchIcon.addEventListener("click", () => {
  document.querySelector(".search-wrap").classList.toggle("active");
  searchInput.focus();
});

document.getElementById("showAll").addEventListener("click", () => {
  filters.forEach(b => b.classList.remove("active"));
  filters[0].classList.add("active");
  renderVideos("all", "");
});

document.getElementById("year").textContent = new Date().getFullYear();
