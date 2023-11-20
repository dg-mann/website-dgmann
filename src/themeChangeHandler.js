export default () => {
  const themeButtons = document.querySelectorAll(".theme-button");
  themeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      changeTheme(event.target.value);
      event.target.classList.add("checked");
    });
  });

  // theme === 'ocean' |  'coffee' | 'funky' | 'night'
  function changeTheme(theme) {
    document.body.classList = [];
    document.body.classList.add(theme);
    themeButtons.forEach((button) => {
      button.classList.remove("checked");
    });
  }
};
