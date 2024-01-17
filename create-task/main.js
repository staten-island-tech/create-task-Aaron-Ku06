import "./style.css";

const DOMSelectors = {
  display: document.querySelector(".display"),
};

const items = [
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
  items.forEach((item) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card" id="card">
        <h2 class="headgear">${item.Name}</h2>
        <img
          class="image"
          src="${item.Image}"
        />`
    );
  });
}
files(items);

document.querySelector(".helmet").addEventListener("click", function () {
  const helmetTrueFiles = items.filter((item) => item.Type === "Helmet");
  helmetTrueFiles.forEach((helmetTrueFiles) => {
    DOMSelectors.display.insertAdjacentHTML("afterbegin", ''
    )
  })
})
