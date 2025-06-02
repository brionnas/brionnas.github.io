class HotDog {
  constructor(name, image, meat, toppings, bun) {
    this.name = name;
    this.image = image;
    this.meat = meat;
    this.toppings = toppings;
    this.bun = bun;
  }

  getSection() {
    const section = document.createElement("section");
    section.classList.add("hotdog");

    const img = document.createElement("img");
    img.src = `images/${this.image}`;
    img.alt = this.name;

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerText = this.name;

    section.appendChild(img);
    section.appendChild(overlay);

    section.addEventListener("click", () => this.showDetails());

    return section;
  }

 showDetails() {
  document.getElementById("modal-name").innerText = this.name;
  document.getElementById("modal-img").src = `images/${this.image}`;
  document.getElementById("modal-img").alt = this.name;
  document.getElementById("modal-meat").innerText = this.meat;
  document.getElementById("modal-toppings").innerText = this.toppings.join(", ");
  document.getElementById("modal-bun").innerText = this.bun;
  document.getElementById("modal").style.display = "block";
}

  }


// Array of HotDogs
const hotdogs = [
  new HotDog("Chicago Dog", "dog1.png", "Beef", ["Pickle", "Mustard", "Onions", "Sport Peppers"], "Poppy Seed"),
  new HotDog("BLT", "dog2.png", "Beef", ["Bacon", "Lettuce", "Tomato", "Mayo"], "Traditional"),
  new HotDog("Cheese & Chili", "dog3.png", "Pork", ["Chili", "Cheddar", "Ketchup"], "Sesame"),
  new HotDog("Grilled Onion Classic", "dog4.png", "Beef", ["Grilled Onions", "Mustard", "Relish"], "Plain"),
];


const container = document.getElementById("hotdog-container");
hotdogs.forEach(hotdog => container.appendChild(hotdog.getSection()));
