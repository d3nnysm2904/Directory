let starWars = {
  genre: "sci-fi",
  async logMovieData() {
    let url = "https://swapi.dev/api/films/";
    let movieData = await $.getJSON(url);
    console.log(movieData.results);
  },
};

const deck = {
  async init() {
    let res = await axios.get("https://www.deckofcardsapi.com/api/deck/new/");
    this.deckId = res.data.deck_id;
  },
  async shuffle() {
    let res = await axios.get(
      `https://www.deckofcardsapi.com/api/deck/${this.deckId}/shuffle//`
    );
    return res;
  },
  async drawCard() {
    let res = await axios.get(
      `https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`
    );
    console.log(res.data.cards[0].image);
    return res.data.cards[0].image;
  },
};
