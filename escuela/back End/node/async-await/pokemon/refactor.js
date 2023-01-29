// let baseURL = "https://pokeapi.co/api/v2/pokemon";

// $.getJSON(`${baseURL}/1/`)
//   .then((p1) => {
//     console.log(`The first pokemon is ${p1.name}`);
//     return $.getJSON(`${baseURL}/2/`);
//   })
//   .then((p2) => {
//     console.log(`The second pokemon is ${p2.name}`);
//     return $.getJSON(`${baseURL}/3/`);
//   })
//   .then((p3) => {
//     console.log(`The third pokemon is ${p3.name}`);
//     return $.getJSON(`${baseURL}/3/`);
//   });

// function get3Pokemon() {
//   let url = "https://pokeapi.co/api/v2/pokemon";
//   axios
//     .get(`${url}/1`)
//     .then(({ data }) => {
//       console.log(`the first pokemon is ${data.name}`);
//       return axios.get(`${url}/2`);
//     })
//     .then(({ data }) => {
//       console.log(`the second  pokemon is ${data.name}`);
//       return axios.get(`${url}/3`);
//     })
//     .then(({ data }) => {
//       console.log(`the third pokemon is ${data.name}`);
//     });
// }

async function get3Pokemonasync() {
  let url = "https://pokeapi.co/api/v2/pokemon";

  let { data: p1 } = await axios.get(`${url}/1`);
  console.log(p1.name);

  let { data: p2 } = await axios.get(`${url}/2`);
  console.log(p2.name);
}
