const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// first route

app.get("/", function (req, res) {
  res.send("Homepage");
});
app.get("/first", function (req, res) {
  console.log("Hello");
  res.send("Hello ");
});

app.post("/post", function (req, res) {
  res.send("First post");
});

app.get("/params/:fname", function (req, res) {
  return res.send(`this instructor is ${req.params.fname}`);
});

const greetings = {
  en: "hello",
  fr: "bonjour",
  js: "konnichiwa",
};

app.get("/greet/:language", (req, res) => {
  //   console.log(req.params );
  //   console.log(req.params.language );
  const lang = req.params.language;
  const greeting = greetings[lang];
  res.send(greeting);
});

app.get("/search", (req, res) => {
  //  console.log((req.query))
  //   const { terms, sort } = req.query;
  const { terms = "diablo3", sort = "best game" } = req.query;
  return res.send(`SEARCH PAGE! Term is ${terms} and sort is ${sort}`);
});

app.get("/show-headers", (req, res) => {
  console.log(req.rawHeaders);
  console.log(req.headers);
  res.send(req.headers);
});

app.get("/show-lan", (req, res) => {
  const lang = req.headers["accept-language"];
  res.send(`Your language is ${lang}`);
});

app.post("/register", (req, res) => {
  //   res.send(req.body);
  res.send(`Welcome ${req.body.username}`);
});
// 3000 is the port
app.listen(3000, () => {
  console.log("App on port 3000");
});
