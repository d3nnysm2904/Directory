// class Pokemon {
//   constructor(id) {
//     this.id = id;
//   }

//   async logName() {
//     let url = `https://pokeapi.co/api/v2/pokemon/${this.id}/`;
//     let response = await $.getJSON(url);
//     console.log(response.name);
//   }
// }

// let pokemon = new Pokemon(10);
// pokemon.logName();

class Pokemon {
  constructor(id) {
    this.id = id;
    this.types = [];
  }

  async getInfo() {
    let url = `https://pokeapi.co/api/v2/pokemon/${this.id}/`;
    let res = await axios.get(url);
    console.log(res);
    this.name = res.data.name;
    for (let type of res.data.types) {
      console.log(type)
      this.types.push(type.type.name);
    }
  }
}

let p = new Pokemon(10);

// pokemon.logName();

const btn = document.querySelector("#btn");
const div = document.querySelector(".container");
btn.addEventListener("click", async function card(e) {
  e.preventDefault();
  let randomNum = Math.floor(Math.random() * 100) + 1;
  let url = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
  let res = await axios.get(url);
  console.log(res);

  let imgSrc = res.data.sprites.front_default;

  newImg = document.createElement("img");
  newImg.setAttribute("src", imgSrc);
  let createDiv = document.createElement("div");
  createDiv.setAttribute("id", "card");
  createDiv.appendChild(newImg);
  div.appendChild(createDiv);
});
