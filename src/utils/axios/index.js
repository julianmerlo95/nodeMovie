const axios = require("axios");
require("dotenv").config();

async function request(title, type) {
  const URI = `${process.env.MOVIES_URL}?s=${title}&type=${type}&apikey=${process.env.API_KEY}`;
  const response = await axios.get(URI);
  return response.data.Search;
}

module.exports = request;
