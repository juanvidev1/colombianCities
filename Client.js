const axios = require("axios");

class Client {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getCities(path) {
    if (!path) {
      path = "";
    }
    const response = await axios.get(this.baseUrl + path);
    return response.data;
  }
}

module.exports = Client;
