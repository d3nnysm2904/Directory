// try {
//   console.frog(45);
// } catch {
//   console.log("Can't do that ");
// }

async function getUser(user) {
  try {
    let url = `https://api.github.com/users/${user}`;
    let response = await axios.get(url);
    console.log(`${response.name}: ${response.bio}`);
  } catch (e) {
    console.log("User does not exist!", e);
  }
}

// getUser("mmaaaattt");
