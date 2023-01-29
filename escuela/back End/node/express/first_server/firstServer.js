// import express
const express = require("express");

// execute express as a function 
const app = express();

// if we making psot request and send in it as json we need express,json
// parses  req.body as JSON 
app.use(express.json());

// this one is for fom data
app.use(express.urlencoded({ extended: true }));

// first route
//  first argument is the path , then a function 
// function will be executed as soon the it match the route on the web 
// req and res are parameters , request , and response 
// request :information about request (query string , url paramaters ,form data)
// response :useful methods for sending a response (html,text ,json ,etc)

// res.send 
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

// using imsomnia we send a post request 

app.post("/register", (req, res) => {
  //   res.send(req.body);
  res.send(`Welcome ${req.body.username}`);
});



// start the server 
// always needs to be at the bottom of the file 
// 3000 is the port
app.listen(3000, () => {
  console.log("App on port 3000");
});
