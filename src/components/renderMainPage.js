const app = document.querySelector('.app');

function renderMainPage() {
  const mainPageHtml = `
  <main class="main">
  <p class="main-text">Выберите сложность</p>
  <div class="main-buttons">
    <button class="main-button main-button-1">1</button>
    <button class="main-button main-button-2">2</button>
    <button class="main-button main-button-3">3</button>
  </div>
  <button class="main-start">Старт</button>
</main>
`;

  app.innerHTML = mainPageHtml;
}

export { renderMainPage }
