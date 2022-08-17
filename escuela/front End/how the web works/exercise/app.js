console.log("Let's get this party started!");
const request =
  "https://api.giphy.com/v1/gifs/search?api_key=WlA6pT650MmIpl36cMr6HMNkraYIWuRz&q=meme&limit=25&offset=0&rating=g&lang=en";

async function getApi(meme) {
  const key = "WlA6pT650MmIpl36cMr6HMNkraYIWuRz";

  const url = "https://api.giphy.com/v1/gifs/search";

  const res = await axios.get(url, {
    params: {
      api_key: key,

      offset: 0,
      rating: "r",
      lang: "en",
      q: meme,
    },
  });
  const num = Math.floor(Math.random() * 50);
  const img = res.data.data[num].images.original.url;
  const newImg = document.createElement("img");
  newImg.id = "remove";
  const div = document.querySelector("#container");
  newImg.src = img;
  div.append(newImg);

  return img;
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const input = document.querySelector('input[type="text"]');
  const search = input.value;
  input.value = "";
  getApi(search);
});

document.querySelectorAll("#remove").addEventListener("click", function (e) {
  e.preventDefault();
  // const btnRemove = document.querySelector("#btn-rmv");
  if ((e.target.tagName = "BUTTON")) {
    e.target.parentElements.remove();
  }
});