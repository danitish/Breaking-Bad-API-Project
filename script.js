let castDisplay = document.getElementById("cast-display");
let userInp = document.getElementById("inp");
let images = document.getElementsByClassName("images");

const BASE_URL = "https://www.breakingbadapi.com/api";

init();
function init() {
  renderAllCharacters();
  userInp.addEventListener("input", renderCharacterByName);
}

async function getAllCharacters() {
  const URL = `${BASE_URL}/characters`;
  const response = await fetch(URL);
  const characters = await response.json();
  return characters;
}

async function getCharacterByName() {
  const URL = `${BASE_URL}/characters?name=${userInp.value}`;
  const response = await fetch(URL);
  const character = await response.json();
  return character;
}

async function renderAllCharacters() {
  let charsArray = await getAllCharacters();
  let html = "";
  for (const character of charsArray) {
    if (character.name === "Holly White") {
      character.img =
        "https://i.pinimg.com/originals/2f/05/61/2f0561e02700247edc7cdd9ca703e349.jpg";
      html += charactersDisplayTemplate(character);
    } else {
      html += charactersDisplayTemplate(character);
    }
  }

  castDisplay.innerHTML = html;
}

async function renderCharacterByName() {
  let charsArray = await getCharacterByName();
  let html = "";
  for (const character of charsArray) {
    if (character.name === "Holly White") {
      character.img =
        "https://i.pinimg.com/originals/2f/05/61/2f0561e02700247edc7cdd9ca703e349.jpg";
      html += charactersDisplayTemplate(character);
    } else {
      html += charactersDisplayTemplate(character);
    }
  }
  castDisplay.innerHTML = html;
}

function charactersDisplayTemplate({
  img,
  name,
  portrayed,
  nickname,
  birthday,
  status,
  occupation,
}) {
  return `
    <div class="col-3 images">    
        <img
            src=${img}
            alt=""
            class="h-75 w-100 "
        />
        <div class="info-display">
            <h5>Name: ${name}</h5>
            <hr>
            <h6>Actor Name: <span>${portrayed}</span></h6>
            <br>
            <h6>Nickname: <span>${nickname}</span></h6>
            <br>
            <h6>Birthday: <span>${birthday}</span></h6>
            <br>
            <h6>Occupation: <span>${occupation.join(", ")}</span></h6>
            <br>
            <h6>Status: <span>${status}</span></h6>
        </div>   
    </div>`;
}
