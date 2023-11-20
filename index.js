const body = document.body;
changeThemeHandler();
body.classList.add("ocean");
renderBoxes();

const resizeObserver = new ResizeObserver(() => {
  renderBoxes();
}).observe(body);

function renderBoxes() {
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const numberOfColumns = 10;
  const boxWidth = viewportWidth / numberOfColumns;
  const numberOfRows = viewportHeight / boxWidth;
  const backgroundContainer = body.querySelector("#background-container");
  const listOfRows = [];

  backgroundContainer.innerHTML = "";
  for (let i = 0; i < numberOfRows; i++) {
    const newBoxRow = document.createElement("div");
    newBoxRow.classList.add("box-row");

    for (let i = 0; i < numberOfColumns; i++) {
      const rndInt = Math.floor(Math.random() * numberOfColumns) + 1;
      const newBox = document.createElement("div");
      newBox.classList.add("box");
      newBox.classList.add("box-" + rndInt);
      newBoxRow.appendChild(newBox);
    }

    listOfRows.push(newBoxRow);
    backgroundContainer.appendChild(newBoxRow);
  }

  setInterval(() => {
    generateBoxes(listOfRows);
  }, 2000);
}

function generateBoxes(rows) {
  rows.forEach((row) => {
    row.querySelectorAll(".box").forEach((box) => {
      const rndInt = Math.floor(Math.random() * 10) + 1;
      box.className = "";
      box.classList.add("box");
      box.classList.add("box-" + rndInt);
    });
  });
}

function changeThemeHandler() {
  const themeButtons = document.querySelectorAll(".theme-button");
  themeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      changeTheme(event.target.value);
      event.target.classList.add("checked");
    });
  });
}

function changeTheme(theme) {
  document.body.classList = [];
  document.body.classList.add(theme);
  themeButtons.forEach((button) => {
    button.classList.remove("checked");
  });
}