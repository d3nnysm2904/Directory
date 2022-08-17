// //website is swapi.dev
// // const response = axios.get("https://swapi.dev/api/planets/");
// // console.log('this lines goes after axios.get ');//still runs first

// // async function getData() {
// //   const response = await axios.get("https://swapi.dev/api/planets/");
// //   console.log(response);
// //   const { next, results } = response.data;
// //   //console.log(next); //this is the link in teh apifor the next planets info
// //   //console.log(results);
// //   //   console.log(response);
// //   //   console.log("this lines goes after axios.get "); //still runs first
// //   //if i want to loop the planets
// //   for (let planets of response.data.results) {
// //     console.log(planets.name);
// //   }
// //   const secondResponse = await axios.get(next);
// //   for (let planets of secondResponse.data.results) {
// //     console.log(planets.name);
// //   }
// // }

// // async function getCatFacts() {
// //   const cats = await axios.get("https://cat-fact.herokuapp.com/facts/random");
// //   console.log(cats);
// // }

// //--------------------------------------more request same shit from up but not that many console.log

// async function getData() {
//   const response = await axios.get("https://swapi.dev/api/planets/");
//   const { next, results } = response.data;

//   for (let planet of results) {
//     console.log(planet.name);
//   }
//   const secondResponse = await axios.get(next);
//   const results2 = secondResponse.data.results;
//   for (let planet of results2) {
//     console.log(planet.name);
//   }
//   console.log(response);
// }

// //-------------another APIs spacex

async function spaceX() {
  const info = await axios.get("https://api.spacexdata.com/v3/missions");
  const ul = document.querySelector("#list");
  for (let launch of info.data) {
    const newLi = document.createElement("li");
    const bold = document.createElement("b");
    bold.innerText = launch.mission_name;
    newLi.append(bold);
    ul.append(newLi);
    newLi.innerHTML += ` - ${launch.description} `;
  }

  //   console.log(info);
  //   for (let launch of info.data) {
  //     console.log(launch.mission_name);
  //   }
  //   for (let launch of info.data) {
  //     console.log(launch.description);
  //   }
}
const btn = document.querySelector("#btn");

btn.addEventListener("click", spaceX);

// //error handling
// //same functions

// async function dogPic() {
//   const dogPic = await axios.get("https://dog.ceo/api/breeds/image/random");
//   const imgS = dogPic.data.message;
//   const newImg = document.createElement("img");
//   newImg.setAttribute("src", imgS);
//   const body = document.querySelector("body");
//   body.append(newImg);
// }

async function getRandomPic() {
  const res = await axios.get("https://dog.ceo/api/breeds/image/random");
  const img = document.querySelector("#dog");
  img.src = res.data.message;
}

async function getDogByBreed(breed) {
  try {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await axios.get(url);
    const img = document.querySelector("#dog");
    img.src = res.data.message;
  } catch (e) {
    alert("breed not found");
    getRandomPic();
  }
}



document.querySelector("#pic").addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.querySelector('input[type="text"]');
  const breeds = input.value;
  console.log(breed)
  getDogByBreed(breeds);
  input.value = "";

});

//more  axios methods

async function getJoke1(first, last) {
  const res = await axios.get(
    `http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`
  );
  console.log(res.data.value.joke);
}

async function getJoke(firstName, lastName) {
  const res = await axios.get("http://api.icndb.com/jokes/random", {
    params: { firstName, lastName },
  });
  console.log(res.data.value.joke);
}

