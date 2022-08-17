async function getUser() {
  const res = await axios.get("https://reqres.in/api/users");
  console.log(res);
}

async function createUser() {
  const res = await axios.post("https://reqres.in/api/users", {
    username: "Dennysm",
    email: "dennymos@gmail.com",
    age: 25,
  });
  console.log(res);
}

async function userCreate() {
  const res = await axios.post("https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  });
  console.log(res);
}
