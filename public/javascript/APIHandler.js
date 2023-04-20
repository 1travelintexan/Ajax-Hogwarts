class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const response = await axios.get(this.BASE_URL + "/Gryffindor");
    return response.data;
  }

  async getOneRegister(id) {
    const response = await axios.get(this.BASE_URL + `/Gryffindor/${id}`);
    return response.data;
  }

  async createOneRegister(newCharacter) {
    const response = await axios.post(
      this.BASE_URL + `/Gryffindor`,
      newCharacter
    );
    return response.data;
  }

  updateOneRegister() {}

  async deleteOneRegister(id) {
    const response = await axios.delete(this.BASE_URL + `/Gryffindor/${id}`);
    console.log("deleted", response.data);
    return response.data;
  }
}
