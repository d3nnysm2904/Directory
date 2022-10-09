const btn = document.querySelector("#btn");
const div = document.querySelector(".container");
btn.addEventListener("click", async function card(e) {
  e.preventDefault();
  let url = "https://www.deckofcardsapi.com/api/deck/new/";
  let res = await axios.get(url);
  console.log(res);
  let deckId = res.data.deck_id;
  console.log(deckId);
  let shuffle = await axios.get(
    `https://www.deckofcardsapi.com/api/deck/${deckId}/shuffle/`
  );
  console.log(shuffle);

  let imgSrc = await axios.get(
    `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  );
  // console.log(imgSrc);

  newImg = document.createElement("img");
  newImg.setAttribute("src", imgSrc.data.cards[0].image);
  let createDiv = document.createElement("div");
  createDiv.setAttribute("id", "card");
  createDiv.appendChild(newImg);
  div.appendChild(createDiv);
});
