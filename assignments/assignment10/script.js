const imageData = [
  { title: "Birthday Party", file: "birthday.jpg" },
  { title: "Clown Show", file: "clown.jpg" },
  { title: "It's Raining", file: "rain.jpg" },
  { title: "Reading Time", file: "read.jpg" },
  { title: "Gardening", file: "shovel.jpg" },
  { title: "Work from Home", file: "work.jpg" }
];

const imageGrid = document.getElementById("image-grid");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const closeBtn = document.getElementById("close");

// Load images
imageData.forEach((img) => {
  const card = document.createElement("div");
  card.className = "image-card";

  const image = document.createElement("img");
  image.src = `images/${img.file}`;
  image.alt = img.title;

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = img.title;

  card.appendChild(image);
  card.appendChild(overlay);

  card.addEventListener("click", () => {
    popupImg.src = `images/${img.file}`;
    popupTitle.textContent = img.title;
    popup.classList.remove("hidden");
  });

  imageGrid.appendChild(card);
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
