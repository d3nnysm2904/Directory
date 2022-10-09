// JQuery request

// let planet;

// $.getJSON("https://swapi.dev/api/planets/1/", response => {
//   planet = response;
//   console.log(planet)
//   $.getJSON(planet.residents[0], response => {
//     residents=response
//     console.log(residents)
//   });

// });

// Promise
// a promise is one-time guarantee of fututre value

let url1 = "https://swapi.dev/api/planets/1/";
let wrongUrl = "https://swasdasdapi.dev/api/planets/1/";

// let firstPromise = axios.get( url1 );

// let rejectedPromise = axios.get( wrongUrl );

// console.log( firstPromise );

// then and catch

// then works if promise is accepted
// catch works if promised is rejected

// firstPromise.then(()=>console.log('Resolved'))
// firstPromise.then( ( data ) => console.log( data ) );

// rejectedPromise.catch( ( err ) => console.log( 'Rejected', err ) );

// promise chaining

// let url = "https://swapi.dev/api/planets/1/";
// axios.get( url ).then( ( res ) =>
// {
//   console.log( res );

//   axios.get( res.data.residents[ 0 ] ).then( ( res ) =>
//   {
//     console.log( res );
//   } );
// } );
// .catch( err => console.log( "rejected", err ) );

let url = "https://swapi.dev/api/planets/1/";
axios
  .get(url)
  .then((res) => {
    console.log(res);
    return axios.get(res.data.residents[0]);
  })
  .then((res) => {
    console.log(res.data);
  })
  .then(() => console.log("*********************************"))
  .catch((err) => console.log("Rejected", err));

// MAKING PROMISES

function threeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
    // setTimeout(reject, 5000);
  });
}

threeSecond().then(() => console.log("All done"));
// threeSecond().catch(() => console.log("Error"));

const h1 = document.querySelector("h1");

// setTimeout(function () {
//   h1.style.color = "red";
//   setTimeout(() => {
//     h1.style.color = "blue";
//     setTimeout(() => {
//       h1.style.color = "orange";
//     }, 1000);
//   }, 1000);
// }, 1000);

function changeColor(el, color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      el.style.color = color;
      resolve();
    }, 2000);
  });
}

changeColor(h1, "yellow")
  .then(() => changeColor(h1, "red"))
  .then(() => changeColor(h1, "blue"))
  .then(() => changeColor(h1, "green"))
  .then(() => changeColor(h1, "purple"))
  .then(() => changeColor(h1, "orange"))
  .then(() => changeColor(h1, "teal"))
  .then(() => changeColor(h1, "pink"));
