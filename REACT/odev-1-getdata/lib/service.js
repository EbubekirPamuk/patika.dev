const axios = require("axios");
async function getData(userId) {
  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: posts } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  return { user, posts };
}

module.exports = getData;
