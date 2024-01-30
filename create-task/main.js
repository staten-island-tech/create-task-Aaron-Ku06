import "./style.css";

const DOMSelectors = {
  display: document.querySelector(".display"),
  reset: document.getElementById("reset-btn")
};

const items = [
  {
    Name: "Star Wars Mandalorian Helmet",
    Image: "Mandalorian.webp",
    Type: "Helmet",
  },
  {
    Name: "Mark 85 Iron Man Helmet",
    Image: "Mark85.webp",
    Type: "Helmet",
  },
  {
    Name: "Red Hood Helmet",
    Image: "RedHood.png",
    Type: "Helmet",
  },
  {
    Name: "Halo Infinite MKVII Helmet",
    Image: "HaloInfinite.webp",
    Type: "Helmet",
  },
  {
    Name: "Mark 6 War Machine Helmet",
    Image: "WarMachineMK6.webp",
    Type: "Helmet",
  },
  {
    Name: "Halo Infinte Master Chief Helmet",
    Image: "MasterCheif.webp",
    Type: "Helmet",
  },
  {
    Name: "Inverted Spear of Heaven",
    Image: "ISOH.webp",
    Type: "Weapon",
  },
  {
    Name: "Zabuza Sword",
    Image: "Zabuza.webp",
    Type: "Weapon",
  },
  {
    Name: "Ichigo Zanpakto Sword",
    Image: "Ichigo.webp",
    Type: "Weapon",
  },
  {
    Name: "All-Black The Necrosword",
    Image: "Necrosword.webp",
    Type: "Weapon",
  },
  {
    Name: "Maki's Split Soul Katana",
    Image: "Maki.webp",
    Type: "Weapon",
  },
  {
    Name: "Cyberpunk 2077 Thermal Katana",
    Image: "Cyberpunk.webp",
    Type: "Weapon",
  },
];

const render = ()=>{
  DOMSelectors.display.innerHTML = ""
  files()
}

const clear = () => {
  localStorage.setItem("downloaded", null)
  render()
}

const readStorage = ()=> {
  return JSON.parse(localStorage.getItem("downloaded"))
}

const download = (name)=>{
  console.log("Downloaded " + name)
  let stored = readStorage()
  if (!stored) localStorage.setItem("downloaded", JSON.stringify([name]))
  else {
    localStorage.setItem("downloaded", JSON.stringify(stored + [name]))
  }
  render()
}

const readDownloaded = ()=> {
  return readStorage() ? JSON.parse(localStorage.getItem("downloaded")) : []
}

function files() {
  items.forEach((item) => {

    if (readDownloaded().includes(item.Name)) return
    
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card" id="card">
        <h2 class="headgear">${item.Name}</h2>
        <img
          class="image"
          src="${item.Image}"
        />
        <button class="download" id="${item.Name}">Download Image</button>`
    );

    document.getElementById(item.Name).onclick = () => {download(item.Name)}
  });
}

DOMSelectors.reset.onclick = clear

files()

/* document.querySelector(".helmet").addEventListener("click", function () {
  const helmetTrueFiles = items.filter((item) => item.Type === "Helmet");
  helmetTrueFiles.forEach((helmetTrueFiles) => {
    DOMSelectors.display.insertAdjacentHTML("afterbegin", ''
    )
  })
})
 */