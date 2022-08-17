const games = {
  bestGame: "Elden Ring",
  yearGAme: "God of War",
  battle: "Fortnite",
  Driving: "Forza ",
  mygame: "MemoryGame",
  game: "Luigi",
  price: 70,
  quantity: 6,
};

//const bestGame =games.bestGame
//const battle =games.battle

const { bestGame, battle } = games;

const { game = "mario", ...others } = games; //the value of game is not added to games,even if itdoesnt exist and the cosnt game is equeal to luigo, the const others is euqal to everything else in the obj games; it set an default

const { mygame: gameCreated } = games;
//console.log(gameCreated)//memoryGame

function checkout(game) {
  const { price, quantity } = game;
  console.log(game);
  return price * quantity;
}

const games1 = {
  bestGame: "Elden Ring",
  yearGAme: "God of War",
  battle: "Fortnite",
  Driving: "Forza ",
  mygame: "MemoryGame",
  game: "Luigi",
  price: 70,
};

checkout(games1); //70 it assumes there is only 1 quantity
