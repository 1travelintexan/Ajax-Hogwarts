const hogwartsAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async (event) => {
      const allCharacters = await hogwartsAPI.getFullList();
      console.log("All characters", allCharacters);
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      let id = document.querySelector("#characterId").value;
      const oneCharacter = await hogwartsAPI.getOneRegister(id);
      console.log("here is one character", oneCharacter);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      let id = document.querySelector("#characterDeleteId").value;
      const oneCharacterDeleted = await hogwartsAPI.deleteOneRegister(id);
      console.log("here is one character deleted", oneCharacterDeleted);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      console.log(event);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      let newStudent = {};
      let inputs = document.querySelectorAll(".field-new input");
      inputs.forEach((input) => {
        console.log("input", input.name);
        if (input.name === "cartoon") {
          newStudent[input.name] = input.checked;
        } else {
          newStudent[input.name] = input.value;
        }
      });

      const createdStudent = await hogwartsAPI.createOneRegister(newStudent);
      console.log("here is the character to create", createdStudent);
    });
});
