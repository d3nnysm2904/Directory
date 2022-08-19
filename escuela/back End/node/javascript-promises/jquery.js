JQuery request


let planet;

$.getJSON("https://swapi.dev/api/planets/1/", response => {
  planet = response;
  console.log(planet)
  $.getJSON(planet.residents[0], response => {
    residents=response
    console.log(residents)
  });

});