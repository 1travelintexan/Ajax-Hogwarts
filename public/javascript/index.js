const hogwartsAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  //fetch all students
  document
    .getElementById("fetch-all")
    .addEventListener("click", async (event) => {});
  //fetch only Gryffindor students
  document
    .getElementById("fetch-Grffindor")
    .addEventListener("click", async (event) => {});
  //fetch only Slytherin students
  document
    .getElementById("fetch-Slytherin")
    .addEventListener("click", async (event) => {});
  //fetch only Hufflepuff students
  document
    .getElementById("fetch-Hufflepuff")
    .addEventListener("click", async (event) => {});
  //fetch only Ravenclaw students
  document
    .getElementById("fetch-Ravenclaw")
    .addEventListener("click", async (event) => {});
  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {});
});
