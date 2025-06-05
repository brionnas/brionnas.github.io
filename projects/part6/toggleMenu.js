const toggle = document.getElementById("mobileMenuToggle");
const nav = document.getElementById("mainNav");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("active");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }
});
