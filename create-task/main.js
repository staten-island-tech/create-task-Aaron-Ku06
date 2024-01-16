import "./style.css";
const helmets = [
  {
    Name: "Star Wars Mandalorian Helmet",
    Image: "/create-task/public/",
    Type: "Helmet",
  },
  {
    Name: "Mark 85 Iron Man Helmet",
    Image: "/create-task/public/",
    Type: "Helmet",
  },
  {
    Name: "Red Hood Helmet",
    Image: "/create-task/public/",
    Type: "Helmet",
  },
  {
    Name: "Halo Infinite MKVII Helmet",
    Image: "/create-task/public/",
    Type: "Helmet",
  },
  {
    Name: "Mark 6 War Machine Helmet",
    Image: "/create-task/public/",
    Type: "Helmet",
  },
  {
    Name: "Halo Infinte Master Chief Helmet",
    Image: "/create-task/public/",
    Type: "Helmet",
  },
  {
    Name: "Inverted Spear of Heaven",
    Image: "/create-task/public/",
    Type: "Weapon",
  },
  {
    Name: "Zabuza Sword",
    Image: "/create-task/public/",
    Type: "Weapon",
  },
  {
    Name: "Ichigo Zanpakto Sword",
    Image: "/create-task/public/",
    Type: "Weapon",
  },
  {
    Name: "All-Black The Necrosword",
    Image: "/create-task/public/",
    Type: "Weapon",
  },
  {
    Name: "Maki's Split Soul Katana",
    Image: "/create-task/public/",
    Type: "Weapon",
  },
  {
    Name: "Cyberpunk 2077 Thermal Katana",
    Image: "/create-task/public/Cyberpunk.webp",
    Type: "Weapon",
  },
];

function files() {
  helmets.forEach((helmet) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card" id="card">
        <h2 class="Sorcerers">${helmet.Name}</h2>
        <img
          class="image"
          src="${helmet.Image}"
        />`
    );
  });
}
files(helmets);
