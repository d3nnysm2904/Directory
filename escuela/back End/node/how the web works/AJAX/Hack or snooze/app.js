// async function signUp(name, username, password) {
//   const res = await axios.post(
//     "https://hack-or-snooze-v3.herokuapp.com/signup",
//     {
//       user: {
//         name,
//         username,
//         password,
//       },
//     }
//   );
//   console.log(res);
// }
// signUp("Denny", "D3nnysm", "d3nnysm123");

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkQzbm55c20iLCJpYXQiOjE2NTIyMjEwOTJ9.mWSrgwC80ctvuFGiGf4omUfPS5eiGzhrsytBr9W2erE";

async function logIn(username, password) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/login",
    {
      user: {
        username,
        password,
      },
    }
  );
  console.log(res);
  return res.data.token;
}

// logIn("D3nnysm", "d3nnysm");

async function getUser(token) {
  const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", {
    params: { token },
  });
  console.log(res);
}

async function getUserWithAuth() {
  const token = await logIn("D3nnysm", "d3nnysm");
  getUser(token);
}

getUserWithAuth();

async function createStory() {
  const token = await logIn("D3nnysm", "d3nnysm");
  const newStory = {
    token,
    story: {
      author: "Denny",
      title: "i finally got it",
      url: "https://google.com",
    },
  };
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/stories",
    newStory
  );
  console.log(res);
}

createStory();
