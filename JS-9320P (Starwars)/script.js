const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg/220px-Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const mainA = document.getElementById("main");
// butonun altinda div olusturup row classi  eklemek , dongu olusturma , karakterlerin html kodlarini ekleme

function renderCharacters() {
  const newDiv = document.createElement("container");
  newDiv.classList.add("row");
  mainA.appendChild(newDiv);

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    const homeworld =
      character.homeworld !== undefined ? character.homeworld : "other";
    const characterHtmlCode = `
      <div class="col-lg-4 mt-5 text-center character-card" data-homeworld="${homeworld}">
          <div class="card pageCard" style="width: 18rem;">
              <img src="${character.pic}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title text-dark fw-bold">${character.name}</h5>
                  <p class="card-text text-dark fw-bold">${homeworld}</p>
              </div>
          </div>
      </div>
    `;
    newDiv.innerHTML = newDiv.innerHTML + characterHtmlCode;
  }

  const renderCharactersButtonA = document.getElementById(
    "renderCharactersButton"
  );

  function removeCharacters() {
    mainA.innerHTML = "";
    renderCharactersButtonA.textContent = "Karakteri Goster";
    renderCharactersButtonA.classList.remove("btn-danger");
    renderCharactersButtonA.classList.add("btn-success");
    renderCharactersButtonA.onclick = renderCharacters;
    images.style.display = "block";
  }

  renderCharactersButtonA.textContent = "Karakterleri Gizle";
  renderCharactersButtonA.classList.add("btn-danger");
  renderCharactersButtonA.classList.remove("btn-success");
  renderCharactersButtonA.onclick = removeCharacters;
}

const homeworldsRaw = characters.map((character) => {
  return character.homeworld !== undefined && character.homeworld !== null
    ? character.homeworld
    : "other";
});
const homeworldsCleaned = homeworldsRaw.map((homeworld) =>
  homeworld.toLowerCase()
);
const homeworldsUnique = [...new Set(homeworldsCleaned)];
const homeworlds = homeworldsUnique;
console.log(homeworlds);

let filterButon = document.querySelector(".filter");
let radioButtonHTML = "";

homeworldsUnique.forEach(function (homeworld, index) {
  radioButtonHTML += `
    <div class="form-check">
      <input class="form-check-input" type="radio" name="homeworld" value="${homeworld}" id="${homeworld}">
      <label class="form-check-label text-white" for="${homeworld}">${homeworld}</label>
    </div>`;
  filterButon.remove();
});
filterButon.innerHTML = radioButtonHTML;

let filter = document.createElement("button");
let btn1 = document.getElementById("filter-btn");
btn1.appendChild(filter);
filter.textContent = "Filtrele";
filter.style.cssText =
  "color:black; background:yellow; font-size:16px; padding:8px; width:8rem; border-radius:1.5rem;";

let x = true;

filter.onclick = function () {
  if (x) {
    x = false;
    document.getElementById("filter-btn").appendChild(filterButon);
    filter.style.backgroundColor = "yellow";
    filter.textContent = "Filtrele";
    document.querySelectorAll("input").forEach(function (item, index) {
      item.onclick = function () {
        const selectedHomeworld = item.value;
        document.querySelectorAll(".character-card").forEach(function (item2) {
          const cardHomeworld = item2.getAttribute("data-homeworld");
          if (
            selectedHomeworld === cardHomeworld ||
            selectedHomeworld === "other"
          ) {
            item2.style.display = "block";
          } else {
            item2.style.display = "none";
          }
        });
      };
    });
  } else {
    x = true;
    filter.textContent = "Filtrele";
    filter.style.backgroundColor = "yellow";
    filterButon.remove();
  }
};
