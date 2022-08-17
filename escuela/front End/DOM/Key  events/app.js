document.addEventListener("keypress", function (e) {
  console.log(e.key);
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
});

document.querySelector("input").addEventListener("keypress", function (e) {
  console.log("key down", e.key);
});
