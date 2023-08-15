const app = document.querySelector('.app');

function renderMainPage() {
  const mainPageHtml = `
  <form class="main">
  <p class="main-text">Выберите сложность</p>
  <div class="main-checbox">
      <input type="radio" id="es" name="difficulty" /><label
        for="es"
        class="main-checbox-text"
        >1</label
      >
      <input type="radio" id="medium" name="difficulty" /><label
        for="medium"
        class="main-checbox-text"
        >2</label
      >
      <input type="radio" id="hard" name="difficulty" /><label
        for="hard"
        class="main-checbox-text"
        >3</label
      >
  </div>
  <button class="main-start">Старт</button>
</form>
`;

  app.innerHTML = mainPageHtml;
}

export { renderMainPage };
