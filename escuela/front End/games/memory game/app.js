function randomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 265);
  return `rgb(${r},${b},${g})`;
}

const allSpan = document.querySelectorAll(".rgb");
setInterval(function () {
  for (let letter of allSpan) {
    letter.style.color = randomRgb();
  }
}, 500);

const startGame = document.querySelector("button");

startGame.addEventListener("click", starts);

function starts() {
  startGame.remove();

  const gameContainer = document.querySelector("#game");
  let card1 = null;
  let card2 = null;
  let cardsFlipped = 0;

  let noClicking = false;

  const cardArray = [
    "img/luigi1.png",
    "img/luigi1.png",

    "img/Mario1.png",
    "img/Mario1.png",

    "img/peach1.png",
    "img/peach1.png",

    "img/yoshi1.png",
    "img/yoshi1.png",

    "img/mush1.png",
    "img/mush1.png",

    "img/plant1.png",
    "img/plant1.png",

    "img/Bullet1.png",
    "img/Bullet1.png",

    "img/Goomba1.png",
    "img/Goomba1.png",
  ];

  function shuffle(array) {
    let counter = cardArray.length;

    while (counter > 0) {
      for (let count of array) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
    }
    return array;
  }

  let shuffleImg = shuffle(cardArray);

  function createDivsForImg(imgArray) {
    for (let img of imgArray) {
      const newImg = document.createElement("img");

      newImg.classList.add(img);
      newImg.setAttribute("src", "img/back1.png");
      let createDiv = document.createElement("div");
      createDiv.appendChild(newImg);

      newImg.addEventListener("click", handleCardClick);
      gameContainer.appendChild(createDiv);
      createDiv.classList.add(img);
    }
  }
  createDivsForImg(shuffleImg);

  function handleCardClick(e) {
    if (noClicking) return;
    if (e.target.classList.contains("flipped")) return;

    let currentCard = e.target;
    currentCard.classList.contains("flipped");
    currentCard.setAttribute("src", currentCard.classList[0]);
    if (!card1 || !card2) {
      currentCard.classList.add("flipped");
      card1 = card1 || currentCard;
      card2 = currentCard === card1 ? null : currentCard;
    }
    if (card1 && card2) {
      noClicking = true;

      let gif1 = card1.className;
      let gif2 = card2.className;

      if (gif1 === gif2) {
        cardsFlipped += 2;
        card1.removeEventListener("click", handleCardClick);
        card2.removeEventListener("click", handleCardClick);
        card1 = null;
        card2 = null;
        noClicking = false;
      } else {
        setTimeout(function () {
          card1.setAttribute("src", "img/back1.png");
          card2.setAttribute("src", "img/back1.png");
          card1.classList.remove("flipped");
          card2.classList.remove("flipped");
          card1 = null;
          card2 = null;
          noClicking = false;
        }, 1000);
      }
    }

    if (cardsFlipped === cardArray.length) alert("game over!");
  }
}
